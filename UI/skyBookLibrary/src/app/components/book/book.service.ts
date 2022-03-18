import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/common/api/config.service";
import { Book, IBook } from "src/app/data/models/book";
import { User } from "src/app/data/models/user";
import { UserService } from "../user/user.service";
import { deleteFileFromFireBase, downloadFileFromFirebase, uploadFileToFirebase } from "./firebase.util";


@Injectable()
export class BookService {

    constructor(
        private configService: ConfigService, 
        private http: HttpClient,
        private userService: UserService,
        private route: Router){}
    
    public async getBooks(): Promise<Book[]>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`library/${user.userId}`)

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
        const path: string = this.configService.getPath(`library/updatebook/${user.userId}`)

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

    public async deleteBook(book: Book): Promise<void>{
        await deleteFileFromFireBase(book.fileLink)
        if(book.coverImageLink){
            await deleteFileFromFireBase(book.coverImageLink)
        }
        const path: string = this.configService.getPath(`library/deletebook/${book.bookId}`)
        await this.http.delete(path)
        .toPromise()
        .catch((err: Error) => console.log(err))
    }

    public async uploadBook(bookFile: FileList, coverImage: FileList, book: Book): Promise<any> {
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`library/uploadbook/${user.userId}`)
        
        const data = await this.http.post(path, book, {
            observe: 'response'
        }).toPromise()
        .then(async (response) => {
            if(response.status === 201){
                const newBook: Book = Book.createFullBook(<IBook>response.body)
                newBook.fileLink = await uploadFileToFirebase(bookFile, <string>user.userId, newBook.bookId)
                if(coverImage){
                    newBook.coverImageLink = await uploadFileToFirebase(coverImage, <string>user.userId, newBook.bookId)
                }
                return this.updateBook(newBook)
            } else {
                return response
            }
        })
        .catch((err: Error) => err)

        return data
    }
}