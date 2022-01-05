import { Component, Input } from "@angular/core";
import { EmailValidator } from "src/app/common/emailValidator";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    email: string
    password: string


    login(formInput: any, event: Event){
        event.preventDefault()
        console.log(formInput)
    }
    
    emailInvalid(): boolean {
        if(this.email && !EmailValidator.isValidEmail(this.email)){
            return true
        }
        return false
    }
}