import { Component } from "@angular/core";
import { BookService } from "src/app/components/book/book.service";

@Component({
    templateUrl: './upload-book.component.html',
    styleUrls: ['./upload-book.component.scss']
})
export class UploadBookComponent{
    public file: FileList

    constructor(private bookService: BookService){}

    selectedFile(event: any) {
        this.file = event.target.files;
        this.bookService.uploadBook(this.file)
    }

    log() {
        this.bookService.readBook()
    }
}