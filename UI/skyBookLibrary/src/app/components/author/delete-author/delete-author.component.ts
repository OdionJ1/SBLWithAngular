import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Author } from "src/app/data/models/author";
import { AuthorService } from "../author.service";

@Component({
    selector: 'app-delete-author',
    templateUrl: './delete-author.component.html',
    styleUrls: ['./delete-author.component.scss']
})
export class DeleteAuthorComponent{
    @Input() authorToDelete: Author
    @Output() closeModal: EventEmitter<any> = new EventEmitter()
    public loading: boolean = false
    public hasError: boolean = false
    public errorMessage: string

    constructor(private authorService: AuthorService){}

    async deleteAuthor(): Promise<void>{
        this.loading = true
        this.hasError = false

        try {
            const response = await this.authorService.deleteAuthor(<number>this.authorToDelete.authorId)

            if(response.status !== 200){
                throw response
            }

            this.loading = false
            this.closeModal.emit()

        } catch (error: any) {
            this.loading = false
            this.hasError = true
            if(error.status === 409){
                this.errorMessage = 'Unable to delete: This author has 1 or more books associated with it'
            } else if(error.status === 403){
                this.errorMessage = 'Cannot delete Default Author'
            }
        }
    }

}