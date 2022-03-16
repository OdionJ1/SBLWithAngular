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
    public uploadbookModal: boolean = false

    constructor(private bookService: BookService, private userService: UserService){}

    async ngOnInit(){
        this.books = await this.bookService.getBooks()
    }

    async closeUploadModal(): Promise<void>{
        this.uploadbookModal = false
        await this.ngOnInit()
    }
}