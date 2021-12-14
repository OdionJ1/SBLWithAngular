import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PageNotFoundComponent } from "./pages/pageNotFound/page-not-found.component";


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
]