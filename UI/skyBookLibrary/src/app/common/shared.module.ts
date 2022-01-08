import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './customButton/custom-button.component';
import { CustomInputComponent } from './formInput/custom-input.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
    declarations: [
      ModalComponent,
      CustomInputComponent,
      CustomButtonComponent
    ],
    imports: [
      FormsModule,
      CommonModule
    ],
    exports: [
      ModalComponent,
      CustomInputComponent,
      CustomButtonComponent,
      FormsModule
    ],
    providers: []
})

export class SharedModule { }