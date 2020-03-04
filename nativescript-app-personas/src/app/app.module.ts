import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/services/auth-guard';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule, NativeScriptUIDataFormModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [AuthGuard]
})
export class AppModule { }
