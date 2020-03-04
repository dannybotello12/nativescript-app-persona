import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario";
import { SecureStorage } from "nativescript-secure-storage";
const firebase = require("nativescript-plugin-firebase");

@Injectable({
  providedIn: "root"
})
export class AutenticacionService {
  secureStorage = new SecureStorage();
  AUTENTICACION = "autenticacion" ;

  constructor() { }

  getAutenticacion(usuario: Usuario) {

    return new Promise<any>((resolve, reject) => {   firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email:  usuario.correo,
          password: usuario.clave
        }
      }).then((result) => {
        this.setSecureStorage(this.AUTENTICACION, JSON.stringify(result));
        resolve(result);
      }, (err) => reject(err));
    });
  }

  setSecureStorage(llave: string , valor: string) {

    this.secureStorage.setSync({
      key: llave,
      value: valor
    });
  }

  getSecureStorage(llave: string) {

  return  this.secureStorage.getSync({
      key: llave
    });
  }

  estadoAutenticacion() {
    firebase.getAuthToken({
        forceRefresh: false
    }).then((token) => {
       return true;
    }).catch((err) => {
      return false;
    });
}

  logout() {
  firebase.logout();
}

}
