import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailValidator } from "src/app/common/emailValidator";
import { User } from "src/app/data/models/user";
import { UserService } from "../user.service";

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

    constructor(private userService: UserService){

    }

    async register (formInput: any, event: Event) : Promise<void> {
        event.preventDefault()

        let result = await this.userService.createUser(this.getUser(formInput))
        console.log(result)
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

    getUser(formInput: any): User {
        const u = new User()
        u.firstName = formInput.firstName
        u.lastName = formInput.lastName
        u.email = formInput.email
        u.password = formInput.password
        
        return u
    }
}