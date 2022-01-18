import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HomePageGuard } from "./pages/home/home.guard";
import { LoginComponent } from "./pages/home/login/login.component";
import { HomeBodyComponent } from "./pages/home/main/home-body.component";
import { BookListComponent } from "./pages/library/books/books.component";
import { LibraryComponent } from "./pages/library/library.component";
import { LibraryPageGuard } from "./pages/library/library.guard";
import { PageNotFoundComponent } from "./pages/pageNotFound/page-not-found.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { WelcomePageGuard } from "./pages/welcome/welcome.guard";


//Home page child routes:
const homeRoutes: Routes = [
    { path: '', component: HomeBodyComponent },
    { path: 'login', component: LoginComponent }
]
//

//Library page child routes:
const libraryRoutes: Routes = [
    { path: '', component: BookListComponent}
]
//

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [HomePageGuard], children: homeRoutes },
    { path: 'welcome', component: WelcomeComponent, canActivate: [WelcomePageGuard] },
    { path: 'library', component: LibraryComponent, canActivate: [LibraryPageGuard], children: libraryRoutes },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
]