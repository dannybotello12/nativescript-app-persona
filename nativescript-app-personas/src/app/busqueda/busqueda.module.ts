import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [ListadoComponent],
  imports: [
    BusquedaRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BusquedaModule { }
