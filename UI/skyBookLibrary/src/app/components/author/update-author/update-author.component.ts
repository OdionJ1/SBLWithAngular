import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Author } from "src/app/data/models/author";
import { AuthorService } from "../author.service";

@Component({
    selector: 'app-update-author',
    templateUrl: './update-author.component.html',
    styleUrls: ['./update-author.component.scss']
})
export class UpdateAuthorComponent implements OnInit{
    @Input() authorToUpdate: Author
    @Output() renameCompleted: EventEmitter<any> = new EventEmitter()
    public hasNameError: boolean = false
    public loading: boolean = false
    public errorMessage: string

    private _authorName: string

    public set authorName(value: string){
        this.hasNameError = false
        this._authorName = value.trimStart()
    }
    
    public get authorName(): string{
        return this._authorName
    }

    constructor(private authorService: AuthorService){}

    ngOnInit(): void {
        this.authorName = this.authorToUpdate.authorName
    }

    async rename(formInput: any, event: Event){
        event.preventDefault()
        this.loading = true

        try {
            const author = new Author()
            author.authorId = this.authorToUpdate.authorId
            author.authorName = formInput.authorName

            const response = await this.authorService.updateAuthor(author)

            if(response.status !== 200){
                throw response
            }

            this.loading = false
            this.renameCompleted.emit()

        } catch(error: any){
            this.loading = false
            this.hasNameError = true
            if(error.status === 409){
                this.errorMessage = 'Author Name already exists'
            } else if(error.status === 403){
                this.errorMessage = 'Cannot rename to Default Author'
            }
        }
    }
}