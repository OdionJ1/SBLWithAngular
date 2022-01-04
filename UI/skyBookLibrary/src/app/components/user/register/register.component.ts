import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailValidator } from "src/app/common/emailValidator";

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

    register(formInput: any, event: Event){
        event.preventDefault()
        console.log(this.registerForm.invalid)
        console.log(formInput)
    }

    
    emailInvalid(): boolean {
        if(this.email && !EmailValidator.isValidEmail(this.email)){
            return true
        }
        return false
    }
    
    passwordInvalid(): boolean {
        if(this.password && this.password.length < 8){
            return true
        }
        return false
    }

    confirmPasswordInvalid(): boolean {
        if((this.password && !this.passwordInvalid()) && (this.confirmPassword && this.confirmPassword !== this.password)){
            return true
        }
        return false
    }

    
    formInvalid(): boolean{
        return this.emailInvalid() || this.passwordInvalid() || this.confirmPasswordInvalid()
    }

}