import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigService } from './common/api/config.service';
import { SharedModule } from './common/shared.module';
import { RegisterFormComponent } from './components/user/register/register.component';
import { UserService } from './components/user/user.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { HomeBodyComponent } from './pages/home/main/home-body.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { appRoutes } from './routes';
import { LibraryModule } from './pages/library/library.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeBodyComponent,
    NavBarComponent,
    RegisterFormComponent
  ],
  imports: [
    SharedModule,
    LibraryModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
