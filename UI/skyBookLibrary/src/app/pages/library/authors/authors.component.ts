import { Component, OnInit } from "@angular/core";
import { AuthorService } from "src/app/components/author/author.service";
import { Author } from "src/app/data/models/author";

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit{
    public authors: Author[]
    public selectedAuthor: Author
    public modalOpen: boolean = false
    public modalId: number = 0

    constructor(private authorService: AuthorService){}

    async ngOnInit(): Promise<void>{
        this.authors = await this.authorService.getAuthors()
    }

    async closeModal(){
        this.modalOpen = false
        this.modalId = 0
        await this.ngOnInit()
    }

    openRenameModal(author: Author){
        this.selectedAuthor = author
        this.modalId = 0
        this.modalOpen = true
    }

    openGetBooksModal(author: Author){
        this.selectedAuthor = author
        this.modalId = 1
        this.modalOpen = true
    }

    openDeleteAuthor(author: Author){
        this.selectedAuthor = author
        this.modalId = 2
        this.modalOpen = true
    }
}