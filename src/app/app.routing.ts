import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const APP_ROUTING : Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent}
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTING);