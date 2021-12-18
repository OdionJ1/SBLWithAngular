import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomInputComponent } from './formInput/custom-Input.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
    declarations: [
      ModalComponent,
      CustomInputComponent,
    ],
    imports: [
      FormsModule,
      CommonModule
    ],
    exports: [
      ModalComponent,
      CustomInputComponent,
      FormsModule
    ],
    providers: []
})

export class SharedModule { }