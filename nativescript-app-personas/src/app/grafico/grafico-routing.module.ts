import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BarrasComponent } from './barras/barras.component';

const routes: Routes = [
  { path: "", redirectTo: "barras" },
  { path: "barras", component: BarrasComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GraficoRoutingModule { }
