import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { FeatureComponent } from "./feature/feature.component";
import { AuthGuard } from "../shared/services/auth-guard";

@NgModule({
 
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
          path: "default", component: FeatureComponent, children: [
            {
              path: "busqueda",
              component: NSEmptyOutletComponent,
              loadChildren: "~/app/busqueda/busqueda.module#BusquedaModule",
              outlet: "busquedaTab"
           },
           {
            path: "grafico",
            component: NSEmptyOutletComponent,
            loadChildren: "~/app/grafico/grafico.module#GraficoModule",
            outlet: "graficoTab"
         },
         {
          path: "acceso",
          component: NSEmptyOutletComponent,
          loadChildren: "~/app/acceso/acceso.module#AccesoModule",
          outlet: "accesoTab"
       }
          ]
          , canActivate: [AuthGuard] }
  ])
  ],
  declarations: [FeatureComponent],
  providers: [
],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureModule { }
