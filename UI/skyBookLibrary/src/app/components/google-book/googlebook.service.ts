import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GoogleBook, IGoogleBooks } from "src/app/data/models/google-books";

@Injectable()
export class GoogleBookService {

    constructor(private http: HttpClient){}

    async getGoogleBooks(searchValue: string): Promise<GoogleBook[]>{
        const books: IGoogleBooks = await this.http.get<IGoogleBooks>(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&filter=free-ebooks&maxResults=40&key=AIzaSyCaCtbmSAdS-razqtBaDIddkZzHkXBLvaI`)
        .toPromise()

        let googleBooks: GoogleBook[] = []

        books.items.forEach((book) => {
            const googleBook: GoogleBook = new GoogleBook()

            googleBook.id = book.id
            googleBook.title = book.volumeInfo.title
            googleBook.authors = book.volumeInfo.authors
            googleBook.categories = book.volumeInfo.categories
            googleBook.previewLink = book.volumeInfo.previewLink
            googleBook.epubLink = book.accessInfo.epub.downloadLink
            googleBook.pdfLink = book.accessInfo.pdf.downloadLink
            googleBook.webReaderLink = book.accessInfo.webReaderLink
            googleBook.thumbnail = book.volumeInfo.imageLinks.smallThumbnail

            googleBooks.push(googleBook)
        })

        return googleBooks
    }
}