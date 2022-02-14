import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/data/models/book";
import { Page } from "src/app/data/models/page";
import { BookService } from "../book.service";

@Component({
    templateUrl: './reading-list.component.html',
    styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {
    public books: Book[]
    public noBooks: boolean
    public PageType = Page

    constructor(private bookService: BookService){}

    async ngOnInit(): Promise<void> {
        this.books = await this.bookService.getReadingList()

        if(this.books.length < 1){
            this.noBooks = true
        }
    }

    async removeFromReadingList(bookId: number): Promise<void>{
        await this.bookService.removeFromReadingList(bookId)
        await this.ngOnInit()
    }
}