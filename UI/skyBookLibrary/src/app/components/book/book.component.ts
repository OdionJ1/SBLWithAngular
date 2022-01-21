import { Component, Input, OnInit } from "@angular/core";
import { Book } from "src/app/data/models/book";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    @Input() book: Book
    public authors: string
    public file: FileList

    ngOnInit(): void {
        const bookAuthors = this.book.authors.map(author => author.authorName)
        this.authors = bookAuthors.join(', ')
    }


    // selectedFile(event: any){
    //     this.file = event.target.files;
    //     console.log(this.file)
    // }
}