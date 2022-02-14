import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/common/api/config.service";
import { Book, IBook } from "src/app/data/models/book";
import { User } from "src/app/data/models/user";
import { UserService } from "../user/user.service";


@Injectable()
export class BookService {

    constructor(
        private configService: ConfigService, 
        private http: HttpClient,
        private userService: UserService,
        private route: Router){}

    
    public async getBooks(userId: string): Promise<Book[]>{
        const path: string = this.configService.getPath(`library/${userId}`)

        const data = await this.http.get<Book[]>(path)
        .toPromise()
        .then(response => response.map(book => Book.create(<IBook>book)))
        
        return data
    }

    public async getBook(bookId: number): Promise<any> {
        const path: string = this.configService.getPath(`library/book/${bookId}`)

        const data = await this.http.get(path, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public async updateBook(book: Book): Promise<any> {
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`library/book/update/${user.userId}`)

        const data = await this.http.put(path, book, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public async getFavouriteBooks(): Promise<Book[]>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`library/favourites/${user.userId}`)

        const data = await this.http.get<Book[]>(path)
        .toPromise()
        .then(response => response.map(book => Book.create(<IBook>book)))

        return data
    }

    public async getReadingList(): Promise<Book[]>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`library/readinglist/${user.userId}`)

        const data = await this.http.get<Book[]>(path)
        .toPromise()
        .then(response => response.map(book => Book.create(<IBook>book)))

        return data
    }

    public async removeFromReadingList(bookId: number): Promise<void>{
        const path: string = this.configService.getPath(`library/readinglist/remove/${bookId}`)
        
        await this.http.put(path, null)
        .toPromise()
        .then(res => console.log(res))
    }

    public async removeFromFavourites(bookId: number): Promise<void>{
        const path: string = this.configService.getPath(`library/favourites/remove/${bookId}`)
        
        await this.http.put(path, null)
        .toPromise()
        .then(res => console.log(res))
    }
}