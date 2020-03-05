import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { PrincipalComponent } from './principal/principal.component';



const routes: Routes = [
{ path: "", redirectTo: "principal" },
{ path: "principal", component: PrincipalComponent  }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AccesoRoutingModule { }
