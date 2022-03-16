import { Component, EventEmitter, Output } from "@angular/core";
import { FileValidator } from "src/app/common/fileValidator";
import { BookService } from "src/app/components/book/book.service";
import { Author } from "src/app/data/models/author";
import { Book } from "src/app/data/models/book";
import { Category } from "src/app/data/models/category";
import { downloadFileFromFirebase } from "../firebase.util";

@Component({
    selector: 'app-upload-book',
    templateUrl: './upload-book.component.html',
    styleUrls: ['./upload-book.component.scss']
})
export class UploadBookComponent{
    @Output() uploadCompleted: EventEmitter<any> = new EventEmitter()
    public openAuthorPopover: boolean = false
    public openCategoryPopover: boolean = false
    public selectedCategories: Category[] = []
    public selectedCategoriesStr: string
    public selectedAuthors: Author[] = []
    public selectedAuthorsStr: string
    public bookFile: FileList
    public coverImage: FileList
    public loading: boolean = false
    public title: string = ''
    public titleExists: boolean = false
    public fileInvalid: boolean
    public coverImageInvalid: boolean

    constructor(private bookService: BookService){}

    selectedFile(event: any) {
        this.fileInvalid = false

        if(FileValidator.isValidEbook(event.target.files)){
            this.bookFile = event.target.files
        } else {
            this.fileInvalid = true
        }
    }

    public async submit(event: Event): Promise<void>{
        event.preventDefault()

        try {
            this.loading = true
            this.titleExists = false

            const response = await this.bookService.uploadBook(this.bookFile, this.coverImage, this.getBook())
            
            if(response.status !== 200){
                throw response
            }
            this.loading = false
            this.uploadCompleted.emit()
            
        } catch (error: any) {
            this.loading = false
            if(error.status === 409){
                this.titleExists = true
            } else {
                console.log(error)
            }
        }
        
    }

    selectedCoverImage(event: any){
        this.coverImageInvalid = false

        if(FileValidator.isValidImage(event.target.files)){
            this.coverImage = event.target.files
        } else {
            this.coverImageInvalid = true
        }
    }

    public setSelectedCategories(categories: Category[]){
        this.selectedCategories = categories
        this.selectedCategoriesStr = this.selectedCategories.map(category => category.categoryName).join(', ')
    }

    public setSelectedAuthors(authors: Author[]){
        this.selectedAuthors = authors
        this.selectedAuthorsStr = this.selectedAuthors.map(author => author.authorName).join(', ')
    }

    public formInvalid(): boolean{
        return !this.title || !this.selectedAuthors.length || !this.selectedCategories.length || !this.bookFile || this.fileInvalid || this.coverImageInvalid
    }

    preventKeyDown(event: any){
        return event.key === 'Enter' && event.preventDefault()
    }

    preventMouseDown(event: any){
        event.preventDefault()
    }

    getBook(): Book {
        let book = new Book;
        book.title = this.title
        book.authors = this.selectedAuthors
        book.categories = this.selectedCategories
        return book
    }
}