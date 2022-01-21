import { Component, Input } from "@angular/core";
import { Book } from "src/app/data/models/book";


@Component({
    selector: 'app-books-container',
    templateUrl: './books-container.component.html',
    styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent {
    @Input() books: Book[]
    public nums: number[] = [1,2,3,4,5,6,7,8,9]
}