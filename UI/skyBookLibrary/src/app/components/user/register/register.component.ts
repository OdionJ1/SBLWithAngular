import { Component } from "@angular/core";

@Component({
    selector: 'app-register-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterFormComponent {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    phoneNumber: number
}