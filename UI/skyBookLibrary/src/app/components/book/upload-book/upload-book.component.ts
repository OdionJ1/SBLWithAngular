import { Component } from "@angular/core";
import { BookService } from "src/app/components/book/book.service";

@Component({
    selector: 'app-upload-book',
    templateUrl: './upload-book.component.html',
    styleUrls: ['./upload-book.component.scss']
})
export class UploadBookComponent{
    public openAuthorPopover: boolean = false
    public openCategoryPopover: boolean = false
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

    preventKeyDown(event: any){
        return event.key === 'Enter' && event.preventDefault()
    }

    preventMouseDown(event: any){
        event.preventDefault()
    }
}