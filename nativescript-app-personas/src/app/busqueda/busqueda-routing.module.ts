import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ListadoComponent } from './listado/listado.component';


const routes: Routes = [
{ path: "", redirectTo: "listado" },
{ path: "listado", component: ListadoComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class BusquedaRoutingModule { }
