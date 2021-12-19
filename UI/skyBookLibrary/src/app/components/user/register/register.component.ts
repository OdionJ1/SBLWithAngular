import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-register-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterFormComponent {
    @ViewChild('registerForm') registerForm: NgForm;
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    phoneNumber: number



    register(formInput: any){
        console.log(this.registerForm.invalid)
        console.log(formInput)
    }
}