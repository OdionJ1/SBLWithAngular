import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BodyContainer } from '../components/main/body-container.component';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { RegisterFormComponent } from '../components/user/register/register.component';
import { HomeBodyComponent } from '../pages/home/main/home-body.component';
import { CustomButtonComponent } from './customButton/custom-button.component';
import { CustomInputComponent } from './formInput/custom-input.component';
import { ModalComponent } from './modal/modal.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({
    declarations: [
      ModalComponent,
      CustomInputComponent,
      CustomButtonComponent,
      BodyContainer,
      HomeBodyComponent,
      NavBarComponent,
      RegisterFormComponent,
      StarsComponent
    ],
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule,
      RouterModule,
    ],
    exports: [
      NavBarComponent,
      ModalComponent,
      RegisterFormComponent,
      BodyContainer,
      StarsComponent,
      HomeBodyComponent,
      CustomInputComponent,
      CustomButtonComponent,
      FormsModule
    ],
    providers: []
})

export class SharedModule { }