import { Component, OnInit } from "@angular/core";
import { AuthorService } from "src/app/components/author/author.service";
import { BookService } from "src/app/components/book/book.service";
import { CategoryService } from "src/app/components/category/category.service";
import { GoogleBookService } from "src/app/components/google-book/googlebook.service";
import { Book } from "src/app/data/models/book";
import { Category } from "src/app/data/models/category";
import { GoogleBook } from "src/app/data/models/google-books";

@Component({
    templateUrl: './google-books.component.html',
    styleUrls: ['./google-books.component.scss']
})
export class GoogleBooksComponent implements OnInit{
    public googleBooks: GoogleBook[] = []
    public books: Book[] = []
    public searchModalOpen: boolean = true

    constructor(
        private googleBookService: GoogleBookService, 
        private bookService: BookService, 
        private authorService: AuthorService,
        private categoryService: CategoryService){}

    async ngOnInit(): Promise<void> {
        const previousSearchValue = localStorage.getItem("searchValue")
        if(previousSearchValue){
            this.googleBooks = await this.googleBookService.getGoogleBooks(previousSearchValue)
        }

        this.books = await this.bookService.getBooks()
    }

    async search(searchValue: string): Promise<void>{
        this.googleBooks = await this.googleBookService.getGoogleBooks(searchValue)
        this.searchModalOpen = false
    }


    async addToBookList(googleBook: GoogleBook): Promise<void>{
        const book: Book = new Book()
        book.title = googleBook.title
        
        if(googleBook.pdfLink){
            book.fileLink = googleBook.pdfLink
        } else if (googleBook.epubLink){
            book.fileLink = googleBook.epubLink
        } else {
            book.fileLink = googleBook.webReaderLink
        }
        
        

        // await this.authorService.createAuthor()

        const userCategories = await this.categoryService.getCategories()
        book.categories = <Category[]>[userCategories.find(category => category.categoryName === "Default Category")]
        

        book.coverImageLink = googleBook.thumbnail
    }

    public bookExists (googleBook: GoogleBook): boolean {
        return this.books.some((book) => book.title.toLowerCase() === googleBook.title.toLowerCase())
    }
    
}