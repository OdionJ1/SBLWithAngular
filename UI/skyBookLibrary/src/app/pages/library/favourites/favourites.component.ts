import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/data/models/book";
import { Page } from "src/app/data/models/page";
import { BookService } from "../../../components/book/book.service";

@Component({
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
    public books: Book[]
    public noBooks: boolean;
    public PageType = Page

    constructor(private bookService: BookService){}

    async ngOnInit(): Promise<void>{
        this.books = await this.bookService.getFavouriteBooks()
        if(this.books.length < 1){
            this.noBooks = true
        }
    }

    async removeFromFavourites(bookId: number): Promise<void>{
        await this.bookService.removeFromFavourites(bookId)
        await this.ngOnInit()
    }
}