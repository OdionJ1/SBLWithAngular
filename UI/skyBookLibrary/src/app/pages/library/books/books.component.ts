import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/components/book/book.service";
import { UserService } from "src/app/components/user/user.service";
import { Book } from "src/app/data/models/book";

@Component({
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BookListComponent implements OnInit {
    public searchType: string = "title"
    public searchValue: string
    public books: Book[]

    constructor(private bookService: BookService, private userService: UserService){}

    async ngOnInit(){
        const user = this.userService.getCurrentUser()
        this.books = await this.bookService.getBooks(<string>user.userId)
    }
}