import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "src/app/components/book/book.service";
import { downloadFileFromFirebase } from "src/app/components/book/firebase.util";
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
    public inFavList: boolean
    public inReadList: boolean
    public isRatingModalOpen: boolean = false

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
                throw response
            }

            this.book = Book.createFullBook(response.body)
            this.authors = this.book.authors.map(author => author.authorName).join(', ')
            this.categories = this.book.categories.map(category => category.categoryName).join(', ')

            this.inFavList = this.book.inFavouriteList;
            this.inReadList = this.book.inReadingList;

            if(this.book.coverImageLink){
                const url: string = await downloadFileFromFirebase(this.book.coverImageLink)
                const img = <HTMLElement>document.getElementById(`detailImg${this.book.bookId}`)

                img.setAttribute('src', url)
            }


        } catch (error) {
            this.invalidId = true
        }
    }

    public async addToFavouriteList(){
        this.book.inFavouriteList = true
        await this.bookService.updateBook(this.book)
        await this.ngOnInit()
    }

    public async addToReadingList(){
        this.book.inReadingList = true
        await this.bookService.updateBook(this.book)
        await this.ngOnInit()
    }

    public async rateBook(rating: number){
        this.book.rating = rating
        await this.bookService.updateBook(this.book)
        this.isRatingModalOpen = false
        await this.ngOnInit()
    }

    public async readBook(){
        const url: string = await downloadFileFromFirebase(this.book.fileLink)
        window.open(url, '_blank')
    }
}