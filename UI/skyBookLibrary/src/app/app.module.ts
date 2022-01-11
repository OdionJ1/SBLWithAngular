import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigService } from './common/api/config.service';
import { SharedModule } from './common/shared.module';
import { UserService } from './components/user/user.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { appRoutes } from './routes';
import { LibraryModule } from './pages/library/library.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    LibraryModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
