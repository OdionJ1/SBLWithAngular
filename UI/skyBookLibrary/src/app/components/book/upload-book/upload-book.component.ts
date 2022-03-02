import { Component } from "@angular/core";
import { BookService } from "src/app/components/book/book.service";
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
    public file: FileList
    public title: string

    constructor(private bookService: BookService){}

    selectedFile(event: any) {
        this.file = event.target.files;
        this.bookService.uploadBook(this.file)
    }

    log() {
        this.bookService.readBook()
    }

    public setSelectedCategory(categories: Category[]){
        this.selectedCategories = categories
        this.selectedCategoriesStr = this.selectedCategories.map(category => category.categoryName).join(', ')
    }

    preventKeyDown(event: any){
        return event.key === 'Enter' && event.preventDefault()
    }

    preventMouseDown(event: any){
        event.preventDefault()
    }
}