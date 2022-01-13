import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EmailValidator } from "src/app/common/emailValidator";
import { UserService } from "src/app/components/user/user.service";
import { User } from "src/app/data/models/user";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    email: string
    password: string
    loading: boolean = false
    hasError: boolean = false
    errorMessage: string

    constructor(private userService: UserService, private router: Router){}


    async login(formInput: any, event: Event): Promise<void> {
        event.preventDefault()
        this.hasError = false
        this.loading = true
        try {
            const response = await this.userService.login(formInput.email, formInput.password)
            if(response.status !== 202){
                throw response
            }

            this.userService.createSession(User.create(response.body))

            this.router.navigate(["./welcome"])

            this.loading = false
        } catch(err: any){
            this.loading = false
            this.hasError = true
            if(err.status === 404){
                this.errorMessage = "Incorrect email address or password"
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
}