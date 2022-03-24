import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FileValidator } from "src/app/common/fileValidator";
import { BookService } from "src/app/components/book/book.service";
import { Author } from "src/app/data/models/author";
import { Book, IBook } from "src/app/data/models/book";
import { Category } from "src/app/data/models/category";
import { UserService } from "../../user/user.service";
import { deleteFileFromFireBase, downloadFileFromFirebase, uploadFileToFirebase } from "../firebase.util";

@Component({
    selector: 'app-upload-book',
    templateUrl: './upload-book.component.html',
    styleUrls: ['./upload-book.component.scss']
})
export class UploadBookComponent implements OnInit{
    @Output() uploadCompleted: EventEmitter<any> = new EventEmitter()
    @Output() updatedCompleted: EventEmitter<any> = new EventEmitter()
    @Input() bookToEdit: Book;
    public openAuthorPopover: boolean = false
    public openCategoryPopover: boolean = false
    public selectedCategories: Category[] = []
    public selectedCategoriesStr: string
    public selectedAuthors: Author[] = []
    public selectedAuthorsStr: string
    public bookFile: FileList | undefined
    public coverImage: FileList | undefined
    public loading: boolean = false
    public title: string = ''
    public titleExists: boolean = false
    public fileInvalid: boolean
    public coverImageInvalid: boolean

    constructor(private bookService: BookService, private userService: UserService){}

    public ngOnInit(): void {
        if(this.bookToEdit){
            this.setValuesToUpdate(this.bookToEdit)
        }
    }

    
    public async submit(event: Event): Promise<void>{
        event.preventDefault()
        try {
            this.loading = true
            this.titleExists = false
            
            if(this.bookToEdit){
                const updatedBook: Book = await this.setUpdatedValues()
                const response = await this.bookService.updateBook(updatedBook)

                if(response.status !== 200){
                    throw response
                }

                this.loading = false
                this.updatedCompleted.emit()

            } else {
               const response = await this.bookService.uploadBook(<FileList>this.bookFile, <FileList>this.coverImage, this.getBook())
               if(response.status !== 200){
                   throw response
               }
               this.loading = false
               this.uploadCompleted.emit()
            }
            
            
        } catch (error: any) {
            this.loading = false
            if(error.status === 409){
                this.titleExists = true
            } else {
                console.log(error)
            }
        }
        
    }

    selectedFile(event: any) {
        this.fileInvalid = false
        if(event.target.files.length === 0){
            this.bookFile = undefined
            return
        }

        if(event.target.files.length && FileValidator.isValidEbook(event.target.files)){
            this.bookFile = event.target.files
        } else {
            this.fileInvalid = true
        }
    }

    selectedCoverImage(event: any){
        this.coverImageInvalid = false

        if(event.target.files.length === 0){
            this.coverImage = undefined
            return
        }

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

    public formInvalid(): boolean {
        if(this.bookToEdit){
            return !this.title || !this.selectedAuthors.length || !this.selectedCategories.length || this.fileInvalid || this.coverImageInvalid
        } else {
            return !this.title || !this.selectedAuthors.length || !this.selectedCategories.length || !this.bookFile || this.fileInvalid || this.coverImageInvalid
        }
    }

    preventKeyDown(event: any){
        return event.key === 'Enter' && event.preventDefault()
    }

    preventMouseDown(event: any){
        event.preventDefault()
    }

    getBook(): Book {
        let book = new Book();
        book.title = this.title
        book.authors = this.selectedAuthors
        book.categories = this.selectedCategories
        return book
    }

    private setValuesToUpdate(book: Book){
        this.title = book.title
        this.selectedAuthors = book.authors
        this.selectedAuthorsStr = book.authors.map(author => author.authorName).join(', ')
        this.selectedCategories = book.categories
        this.selectedCategoriesStr = book.categories.map(cat => cat.categoryName).join(', ')
    }

    private async setUpdatedValues(): Promise<Book>{
        const book: Book = <IBook>{...this.bookToEdit}
        book.title = this.title
        book.authors = this.selectedAuthors
        book.categories = this.selectedCategories

        if(this.bookFile){
            const userId: string = <string>this.userService.getCurrentUser().userId
            await deleteFileFromFireBase(book.fileLink)
            book.fileLink = await uploadFileToFirebase(this.bookFile, userId, book.bookId)
        }

        if(this.coverImage){
            const userId: string = <string>this.userService.getCurrentUser().userId
            await deleteFileFromFireBase(book.coverImageLink)
            book.coverImageLink = await uploadFileToFirebase(this.coverImage, userId, book.bookId)
        }

        return book
    }
}