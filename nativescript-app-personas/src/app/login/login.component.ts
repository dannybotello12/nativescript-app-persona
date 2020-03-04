import { Component, OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { Usuario } from "../shared/model/usuario";
import { RadDataForm } from "nativescript-ui-dataform";
import { RouterExtensions } from "nativescript-angular/router";
import { AutenticacionService } from "../shared/services/autenticacion.service";
@Component({

  selector: "Login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  isLoggingIn = true;
  user: Usuario = new Usuario("", "");
  processing = false;
  formulario: RadDataForm;
  private _mensaje: string;

  constructor(private page: Page ,
              private routerExtensions: RouterExtensions,
              private  autenticacion: AutenticacionService) {

  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.formulario = this.page.getViewById("formData") as RadDataForm;
}
  submit() {
  this.processing = true;
  if (!this.formulario.hasValidationErrors()) {
    this.autenticacion.getAutenticacion(this.user)
    .then((res) => {
      this.routerExtensions.navigate(["/feature/default"]);
    }, (err) => {
       this._mensaje = "Autenticacion Fallida sus credenciales no son validas";
    });
    
  }
  this.processing = false;
}

  get person(): Usuario {
  return this.user;
}

  get mensaje() {
  return this._mensaje;
}

// >> angular-dataform-property-validate-event
  onPropertyValidate(args) {
  /*  let validationResult = true;
  
    if (args.propertyName === "password2") {
        const dataForm = args.object;
        const password1 = dataForm.getPropertyByName("password");
        const password2 = args.entityProperty;
        if (password1.valueCandidate !== password2.valueCandidate) {
            password2.errorMessage = "Passwords do not match.";
            validationResult = false;
        }
    }
  
    args.returnValue = validationResult;*/
  }
  // << angular-dataform-property-validate-event
  
  onPropertyValidated(args) {
   /* const propertyName = args.propertyName;
    const validatedValue = args.entityProperty.valueCandidate;
    const validationResult = args.entityProperty.isValid;
  
    this._text = "Validated!" + "\n" +
        "PropertyName: " + propertyName + "\n" +
        "Value: " + validatedValue + "\n" +
        "Result: " + validationResult;*/
  }
  
}
