import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "src/app/components/book/book.service";
import { Book } from "src/app/data/models/book";


@Component({
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
    public book: Book
    public parameter: string
    public invalidId: boolean
    public authors: string
    public categories: string

    constructor(private bookService: BookService, private route: ActivatedRoute){}

    async ngOnInit() {
        let { snapshot : { paramMap } } = this.route
        this.parameter = <string>paramMap.get('id')
        const id = Number(paramMap.get('id'))
        
        if(isNaN(id)){
            this.invalidId = true
            return
        }

        try {
            const response = await this.bookService.getBook(id)
            
            if(response.status !== 200){
                this.invalidId = true
                return
            }

            this.book = Book.createFullBook(response.body)
            const bookAuthors = this.book.authors.map(author => author.authorName)
            this.authors = bookAuthors.join(', ')

            const bookCategories = this.book.categories.map(category => category.categoryName)
            this.categories = bookCategories.join(', ')

        } catch (error) {
            this.invalidId = true
        }
    }
}