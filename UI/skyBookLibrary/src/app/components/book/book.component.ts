import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Book } from "src/app/data/models/book";
import { Page } from "src/app/data/models/page";
import { downloadFileFromFirebase } from "./firebase.util";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit {
    @Input() book: Book
    @Input() currentPage: Page
    @Output() removeFromList: EventEmitter<number> = new EventEmitter() 
    public PageType = Page
    public showRemoveButton: boolean = false
    public authors: string

    ngOnInit(): void {
        const bookAuthors = this.book.authors.map(author => author.authorName)
        this.authors = bookAuthors.join(', ')

        if(this.currentPage === this.PageType.favourites || this.currentPage === this.PageType.readingList){
            this.showRemoveButton = true
        }
    }
    
    public remove(){
        this.removeFromList.emit(this.book.bookId)
    }
    
    async ngAfterViewInit(): Promise<void> {
        if(this.book.coverImageLink){
            const url = await downloadFileFromFirebase(this.book.coverImageLink)
            let img = <HTMLElement>document.getElementById(`img${this.book.bookId}`)
            img.setAttribute('src', url)
        } 
    }
}