import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './common/shared.module';
import { RegisterFormComponent } from './components/user/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeBodyComponent } from './pages/home/main/home-body.component';
import { NavBarComponent } from './pages/home/navbar/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBodyComponent,
    NavBarComponent,
    RegisterFormComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
