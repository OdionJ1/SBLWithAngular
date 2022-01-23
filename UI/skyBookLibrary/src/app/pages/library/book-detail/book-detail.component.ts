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

    constructor(private bookService: BookService, private route: ActivatedRoute){}

    async ngOnInit() {
        let { snapshot : { paramMap } } = this.route
        this.parameter = <string>paramMap.get('id')
        const id = Number(paramMap.get('id'))
        
        if(isNaN(id)){
            this.invalidId = true
        }

        try {
            const response = await this.bookService.getBook(id)
            
            if(response.status !== 200){
                this.invalidId = true
            }

            this.book = Book.createFullBook(response.body)
            console.log(this.book)
        } catch (error) {
            this.invalidId = true
        }
    }
}