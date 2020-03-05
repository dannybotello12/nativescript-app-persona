
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
@Injectable()
export class AuthGuard implements CanActivate {
   
     constructor(private authService: AutenticacionService, private routerExtensions: RouterExtensions)
     {}

     canActivate(

       
       
       next: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
        console.log('autenticacion');
        if (this.authService.estadoAutenticacion) {
         return true;
       } else {
         return  this.routerExtensions.navigate(["/login"], { clearHistory: true });
       }
   
     }

}
