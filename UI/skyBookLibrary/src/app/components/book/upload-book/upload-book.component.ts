import { Component } from "@angular/core";
import { FileValidator } from "src/app/common/fileValidator";
import { BookService } from "src/app/components/book/book.service";
import { Author } from "src/app/data/models/author";
import { Category } from "src/app/data/models/category";

@Component({
    selector: 'app-upload-book',
    templateUrl: './upload-book.component.html',
    styleUrls: ['./upload-book.component.scss']
})
export class UploadBookComponent{
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

    public submit(event: Event){
        event.preventDefault()
        
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
        return !this.title || !this.selectedAuthors.length || !this.selectedCategories.length || !this.bookFile
    }

    preventKeyDown(event: any){
        return event.key === 'Enter' && event.preventDefault()
    }

    preventMouseDown(event: any){
        event.preventDefault()
    }
}