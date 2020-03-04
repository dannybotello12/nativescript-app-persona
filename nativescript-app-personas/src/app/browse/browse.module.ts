import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BrowseComponent } from "./browse.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "browse" },
            { path: "browse", component: BrowseComponent }])
    ],
    declarations: [
        BrowseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
