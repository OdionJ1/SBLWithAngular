import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { ConfigService } from "src/app/common/api/config.service";
import { IUser, User } from "src/app/data/models/user";

@Injectable()
export class UserService {
    public closeModal$ = new BehaviorSubject(false);

    constructor(
        private configService: ConfigService, 
        private http: HttpClient,
        private route: Router){}

    public async createUser(user: User): Promise<any> {
        const path: string = this.configService.getPath("account/register")

        const data = await this.http.post(path, user, {
            observe: 'response',
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public createSession(user: User){
        localStorage.setItem("currentUser", JSON.stringify(user))
    }

    public getCurrentUser(): User {
        let user: User = JSON.parse(<string>localStorage.getItem("currentUser"));
        return user
    }

    public logout(): void {
        localStorage.removeItem("currentUser")
        this.route.navigate(['/home'])
    }

    public async login(email: string, password: string): Promise<any> {
        const path: string = this.configService.getPath("account/login")

        const body = {
            email: email,
            password: password
        }

        const data = await this.http.post(path, body, {
            observe: 'response',
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public async getUser(id: string): Promise<any> {
        const path: string = this.configService.getPath(`account/${id}`)

        const data = await this.http.get(path, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => {
            console.log(err)
            return err
        })

        return data
    }

}