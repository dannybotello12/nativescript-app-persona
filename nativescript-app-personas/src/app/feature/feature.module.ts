import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { FeatureComponent } from './feature/feature.component';

@NgModule({
 
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
          path: "default", component: FeatureComponent, children: [
            {
              path: "home",
              component: NSEmptyOutletComponent,
              loadChildren: "~/app/home/home.module#HomeModule",
              outlet: "homeTab"
          },
          {
              path: "browse",
              component: NSEmptyOutletComponent,
              loadChildren: "~/app/browse/browse.module#BrowseModule",
              outlet: "browseTab"
          },
          {
            path: "search",
            component: NSEmptyOutletComponent,
            loadChildren: "~/app/search/search.module#SearchModule",
            outlet: "searchTab"
        }
          ]
      }
  ])
  ],
  declarations: [FeatureComponent],
  providers: [
],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureModule { }
