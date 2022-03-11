import { Author, IAuthor } from "./author";
import { Category, ICategory } from "./category";

export class Book implements IBook {
    bookId: number;
    title: string;
    rating: number;
    dateUploaded: Date
    authors: IAuthor[]
    categories: ICategory[]
    inReadingList: boolean
    inFavouriteList: boolean
    fileLink: string
    coverImageLink: string

    static create(book: IBook){
        if(!book) return book
        let b = new Book()
        b.bookId = book.bookId
        b.title = book.title
        b.rating = book.rating
        b.coverImageLink = book.coverImageLink
        b.authors = book.authors.map(author => Author.create(author))
        return b
    }

    static createFullBook(book: IBook){
        let b = this.create(book)
        b.dateUploaded = book.dateUploaded
        b.fileLink = book.fileLink
        b.inFavouriteList = book.inFavouriteList
        b.inReadingList = book.inReadingList
        b.categories = book.categories.map(category => Category.create(category))
        return b
    }
}


export interface IBook {
    bookId: number
    title: string
    rating: number
    dateUploaded: Date,
    authors: IAuthor[]
    categories: ICategory[]
    inReadingList: boolean,
    inFavouriteList: boolean,
    fileLink: string
    coverImageLink: string
}