import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
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
    public loading: boolean = false
    public hasError: boolean = false
    public errorMessage: string
    public success: boolean = false


    constructor(private userService: UserService, private router: Router){}

    async register(formInput: any, event: Event): Promise<void> {
        event.preventDefault()
        
        this.loading = true
        try {
            const response = await this.userService.createUser(this.getUser(formInput))
            
            if(response.status !== 201){
                throw response
            }
            
            this.loading = false
            this.success = true
            setTimeout(() => {
                this.userService.closeModal$.next(false)
                this.router.navigate(["/home/login"])
            }, 3000)

        } catch (err: any){
            this.success = false
            this.loading = false
            this.hasError = true
            if(err.status === 409){
                this.errorMessage = "Email address already registered"
            } else {
                this.errorMessage = "An error occured"
            }
        }
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