import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Author } from "src/app/data/models/author";
import { AuthorService } from "./author.service";

class AuthorWithChecked extends Author {
    public checked: boolean
}

@Component({
    selector: 'app-author-popover',
    templateUrl: './authors-popover.component.html',
    styleUrls: ['./authors-popover.component.scss']
})
export class AuthorPopoverComponent implements OnInit{
    @Input() prevSelectedAuthors: Author[]
    @Output() propagateSelectedAuthors: EventEmitter<Author[]> = new EventEmitter<Author[]>()
    public userAuthors: Author[]
    public authors: AuthorWithChecked[];
    public loading: boolean = false
    public hasError: boolean = false
    public authorName: string

    constructor(private authorService: AuthorService){}

    async ngOnInit(): Promise<void> {
        this.userAuthors = await this.authorService.getAuthors()

        this.authors = this.addCheckedProp(this.userAuthors)
    }

    async submitForm(formInput: any, event: Event): Promise<void>{
        event.preventDefault()

        this.loading = true
        this.hasError = false
        try {
            const newAuthor = new Author()
            newAuthor.authorName = formInput.authorName
            const response = await this.authorService.createAuthor(newAuthor)

            if(response.status !== 200){
                throw response
            }

            this.authorName = ''
            await this.ngOnInit()
            this.loading = false

        } catch (error: any) {
            if(error.status === 409){
                this.hasError = true
            }
            this.loading = false
        }
    }

    selectAuthor (id?: number){
        this.authors.forEach(author => {
            if(author.authorId === id){
                author.checked = !author.checked
            }
        })

        this.propagateSelectedAuthors.emit(this.removeCheckedProp(this.authors))
    }

    private addCheckedProp (authors: Author[]): AuthorWithChecked[] {
        const authorsWithChecked: AuthorWithChecked[] = authors.map(author => {
            return {...author,
                    checked: this.prevSelectedAuthors.some(au => au.authorId === author.authorId)      
            }})

        return authorsWithChecked
    }


    private removeCheckedProp(authors: AuthorWithChecked[]): Author[] {
        const au: Author[] = []
        authors.forEach(author => {
            if(author.checked){
                au.push(Author.create(author))
            }
        })

        return au
    } 
}