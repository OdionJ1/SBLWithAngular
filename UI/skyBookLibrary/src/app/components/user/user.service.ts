import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ConfigService } from "src/app/common/api/config.service";
import { User } from "src/app/data/models/user";

@Injectable()
export class UserService {
    public closeModal$ = new BehaviorSubject(false);

    constructor(
        private configService: ConfigService, 
        private http: HttpClient){}

    public async createUser(user: User): Promise<any> {
        const path: string = this.configService.getPath("account/register")

        const data = await this.http.post(path, user, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

}