import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GraficoRoutingModule } from './grafico-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BarrasComponent } from './barras/barras.component';


@NgModule({
  declarations: [BarrasComponent],
  imports: [
    GraficoRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GraficoModule { }
