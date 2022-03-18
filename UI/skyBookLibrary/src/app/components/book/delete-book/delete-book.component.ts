import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Book } from "src/app/data/models/book";
import { BookService } from "../book.service";

@Component({
    selector: 'app-delete-book',
    templateUrl: './delete-book.component.html',
    styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent {
    @Input() book: Book
    @Output() closeModal: EventEmitter<any> = new EventEmitter()

    constructor(private bookService: BookService, private router: Router){}

    async deleteBook(): Promise<void>{
        await this.bookService.deleteBook(this.book)
        this.router.navigate(['/library'])
    }
}