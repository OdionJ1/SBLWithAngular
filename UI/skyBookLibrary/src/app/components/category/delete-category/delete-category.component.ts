import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Category } from "src/app/data/models/category";
import { CategoryService } from "../category.service";

@Component({
    selector: 'app-delete-category',
    templateUrl: './delete-category.component.html',
    styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent{
    @Input() categoryToDelete: Category
    @Output() closeModal: EventEmitter<any> = new EventEmitter()
    public loading: boolean = false
    public hasError: boolean = false
    public errorMessage: string

    constructor(private categoryService: CategoryService){}


    async deleteCategory(): Promise<void>{
        this.loading = true
        this.hasError = false

        try {
            const response = await this.categoryService.deleteCategory(<number>this.categoryToDelete.categoryId)

            if(response.status !== 200){
                throw response
            }

            this.loading = false
            this.closeModal.emit()

        } catch (error: any) {
            this.loading = false
            this.hasError = true
            if(error.status === 409){
                this.errorMessage = 'Unable to delete: This category has 1 or more books associated with it'
            } else if(error.status === 403){
                this.errorMessage = 'Cannot delete Default Category'
            }
        }
    }
}