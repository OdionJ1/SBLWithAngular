import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Category } from "src/app/data/models/category";
import { CategoryService } from "../book/upload-book/categories-popover/category.service";

@Component({
    selector: 'app-update-category',
    templateUrl: './update-category.component.html',
    styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
    @Input() categoryToUpdate: Category
    @Output() renameCompleted: EventEmitter<any> = new EventEmitter()
    public hasNameError: boolean = false
    public loading: boolean = false
    public errorMessage: string

    private _categoryName: string

    public set categoryName(value: string){
        this.hasNameError = false
        this._categoryName = value.trimStart()
    }

    public get categoryName(): string{
        return this._categoryName
    }

    constructor(private categoryService: CategoryService){}

    ngOnInit(): void{
        this.categoryName = this.categoryToUpdate.categoryName
    }

    async rename(formInput: any, event: Event): Promise<void> {
        event.preventDefault()
        this.loading = true

        try {
            const category = new Category()
            category.categoryId = this.categoryToUpdate.categoryId
            category.categoryName = formInput.categoryName

            const response = await this.categoryService.updateCategory(category)

            if(response.status !== 200){
                throw response
            }

            this.loading = false
            this.renameCompleted.emit()

        } catch (error: any) {
            this.loading = false
            this.hasNameError = true
            if(error.status === 409){
                this.errorMessage = 'Category Name already exists'
            } else if(error.status === 403){
                this.errorMessage = 'Cannot rename to Default Category'
            }
        }
    }
}