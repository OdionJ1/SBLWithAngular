import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "src/app/common/api/config.service";
import { UserService } from "src/app/components/user/user.service";
import { Category, ICategory } from "src/app/data/models/category";
import { User } from "src/app/data/models/user";


@Injectable()
export class CategoryService {
    
    constructor(
        private configService: ConfigService, 
        private http: HttpClient,
        private userService: UserService){}
    
    
    public async getCategories(): Promise<Category[]>{
        const user: User = this.userService.getCurrentUser()
        const path = this.configService.getPath(`library/getcategories/${user.userId}`)

        const data = await this.http.get<Category[]>(path)
        .toPromise()
        .then(response => response.map(category => Category.create(<ICategory>category)))

        return data
    }

    public async createCategory(category: Category): Promise<any>{
        const user: User = this.userService.getCurrentUser()
        const path = this.configService.getPath(`library/createcategory/${user.userId}`)

        const data = await this.http.post(path, category, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }
}