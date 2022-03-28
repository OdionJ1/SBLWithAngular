import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from 'src/app/common/api/config.service';
import { UserService } from "src/app/components/user/user.service";
import { Author, IAuthor } from "src/app/data/models/author";
import { Book, IBook } from "src/app/data/models/book";
import { User } from "src/app/data/models/user";

@Injectable()
export class AuthorService {

    constructor(
        private configService: ConfigService,
        private userService: UserService,
        private http: HttpClient
    ){}

    public async getAuthors(): Promise<Author[]>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`/library/getauthors/${user.userId}`)

        const data = this.http.get<Author[]>(path)
        .toPromise()
        .then(response => response.map(author => Author.create(<IAuthor>author)))

        return data
    }

    public async createAuthor(author: Author): Promise<any>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`/library/createauthor/${user.userId}`)

        const data = this.http.post(path, author, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public async updateAuthor(author: Author): Promise<any>{
        const user: User = this.userService.getCurrentUser()
        const path: string = this.configService.getPath(`/library/updateauthor/${user.userId}`)

        const data = this.http.put(path, author, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }

    public async getBooksForAuthor(authorId: number): Promise<Book[]> {
        const path: string = this.configService.getPath(`/library/booksforauthor/${authorId}`)

        const data = this.http.get<Book[]>(path)
        .toPromise()
        .then(response => response.map(book => Book.create(<IBook>book)))

        return data
    }

    public async deleteAuthor(authorId: number): Promise<any>{
        const path: string = this.configService.getPath(`/library/deleteauthor/${authorId}`)

        const data = this.http.delete(path, {
            observe: 'response'
        })
        .toPromise()
        .catch((err: Error) => err)

        return data
    }
}