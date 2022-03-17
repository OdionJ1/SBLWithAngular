import { Component, Input } from "@angular/core";
import { Book } from "src/app/data/models/book";

@Component({
    selector: 'app-delete-book',
    templateUrl: './delete-book.component.html',
    styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent {
    @Input() book: Book
}