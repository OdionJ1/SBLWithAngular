import { Component, Input, OnInit } from "@angular/core";
import { Author } from "src/app/data/models/author";
import { Book } from "src/app/data/models/book";
import { AuthorService } from "../author.service";


@Component({
    selector: 'app-books-for-author',
    templateUrl: './books-for-author.component.html',
    styleUrls: ['./books-for-author.component.scss']
})
export class BooksForAuthorComponent implements OnInit{
    @Input() selectedAuthor: Author
    public books: Book[]
    public noBooks: boolean = false
    
    constructor(private authorService: AuthorService){}

    async ngOnInit(): Promise<void> {
        this.books = await this.authorService.getBooksForAuthor(<number>this.selectedAuthor.authorId)

        if(!this.books.length){
            this.noBooks = true
        }
    }
}