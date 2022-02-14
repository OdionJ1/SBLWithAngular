import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "src/app/data/models/book";
import { Page } from "src/app/data/models/page";


@Component({
    selector: 'app-books-container',
    templateUrl: './books-container.component.html',
    styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent {
    @Input() books: Book[]
    @Input() currentPage: Page
    PageType = Page
    @Output() removeFromFavourites: EventEmitter<number> = new EventEmitter()
    @Output() removeFromReadingList: EventEmitter<number> = new EventEmitter()


    removeFromList(bookId: number){
        if(this.currentPage === this.PageType.favourites){
            this.removeFromFavourites.emit(bookId)
        } else {
            this.removeFromReadingList.emit(bookId)
        }
    }
}