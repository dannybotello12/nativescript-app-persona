import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/services/auth-guard";

const routes: Routes = [
    { path: "login",  component: LoginComponent },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "feature",
        loadChildren: "~/app/feature/feature.module#FeatureModule"
    }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
