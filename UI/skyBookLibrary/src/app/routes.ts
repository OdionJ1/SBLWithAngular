import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/home/login/login.component";
import { HomeBodyComponent } from "./pages/home/main/home-body.component";
import { LibraryComponent } from "./pages/library/library.component";
import { PageNotFoundComponent } from "./pages/pageNotFound/page-not-found.component";


//Home page child routes:
const homeRoutes: Routes = [
    { path: '', component: HomeBodyComponent },
    { path: 'login', component: LoginComponent }
]
//

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, children: homeRoutes },
    { path: 'library', component: LibraryComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
]