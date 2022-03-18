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
    public books: Book[]
    public uploadbookModal: boolean = false
    public searchedBooks: Book[]
    private _searchValue: string

    public set searchValue(value: string){
        this._searchValue = value.toLowerCase().trim()

        if(this.searchType === "title"){
            this.searchedBooks = this.books.filter(book => book.title.toLowerCase().includes(this.searchValue))
        } else {
            this.searchedBooks = this.books.filter(book => book.authors.some(author => author.authorName.toLowerCase().includes(this.searchValue)))
        }
    }

    public get searchValue(): string {
        return this._searchValue
    }
    

    constructor(private bookService: BookService, private userService: UserService){}

    async ngOnInit(){
        this.books = await this.bookService.getBooks()

        this.searchedBooks = this.books
    }

    async closeUploadModal(): Promise<void>{
        this.uploadbookModal = false
        await this.ngOnInit()
    }
}