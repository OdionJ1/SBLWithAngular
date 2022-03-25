import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "src/app/common/api/config.service";
import { UserService } from "src/app/components/user/user.service";
import { Book, IBook } from "src/app/data/models/book";
import { Category, ICategory } from "src/app/data/models/category";
import { User } from "src/app/data/models/user";


@Injectable()
export class CategoryService {
    
    constructor(
        private configService: ConfigService, 
        private http: HttpClient,
        private userService: UserService
    ){}

    
    public async getCategories(): Promise<Category[]>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`library/getcategories/${user.userId}`)

        const data = await this.http.get<Category[]>(path)
        .toPromise()
        .then(response => response.map(category => Category.create(<ICategory>category)))

        return data
    }

    public async createCategory(category: Category): Promise<any>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`library/createcategory/${user.userId}`)

        const data = await this.http.post(path, category, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public async updateCategory(category: Category): Promise<any> {
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`/library/updatecategory/${user.userId}`)

        const data = await this.http.put(path, category, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public async getBooksInCategory(categoryId: number): Promise<Book[]> {
        const path: string = this.configService.getPath(`/library/booksincategory/${categoryId}`)

        const data = await this.http.get<Book[]>(path)
        .toPromise()
        .then(response => response.map(book => Book.create(<IBook>book)))

        return data
    }

    public async deleteCategory(categoryId: number): Promise<any> {
        const path: string = this.configService.getPath(`/library/deletecategory/${categoryId}`)

        const data = await this.http.delete(path, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }
}