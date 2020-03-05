import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AccesoRoutingModule } from './acceso-routing.module';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    NativeScriptCommonModule, AccesoRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccesoModule { }
