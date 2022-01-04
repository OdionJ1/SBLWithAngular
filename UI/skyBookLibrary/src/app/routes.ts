import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HomeBodyComponent } from "./pages/home/main/home-body.component";
import { PageNotFoundComponent } from "./pages/pageNotFound/page-not-found.component";


//Home page child routes:
const homeRoutes: Routes = [
    { path: '', component: HomeBodyComponent}
]
//

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, children: homeRoutes },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
]