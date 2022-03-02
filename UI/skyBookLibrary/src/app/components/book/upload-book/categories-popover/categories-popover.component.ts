import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { Category } from "src/app/data/models/category";
import { CategoryService } from "./categories.service";

@Component({
    selector: 'app-category-popover',
    templateUrl: './categories-popover.component.html',
    styleUrls: ['./categories-popover.component.scss']
})
export class CategoryPopoverComponent implements OnInit{
    @Input() prevSelectedCategories: Category[]
    @Output() propagateSelectedCategory: EventEmitter<Category[]> = new EventEmitter<Category[]>()
    public userCategories: Category[]
    public categories: any;
    public loading: boolean = false
    public hasError: boolean = false
    public categoryName: string

    constructor(private categoryService: CategoryService){}

    async ngOnInit(): Promise<void> {
        this.userCategories = await this.categoryService.getCategories()

        this.categories = this.addCheckedProp(this.userCategories)
    }

    selectCategory (id: number){
        this.categories.forEach((category: any) => {
            if(category.categoryId === id){
                category.checked = !category.checked
            }
        })

        this.propagateSelectedCategory.emit(this.removeCheckedProp(this.categories))
    }

    async submitForm(formInput: any, event: Event): Promise<void>{
        event.preventDefault()

        this.loading = true
        this.hasError = false
        try {
            const newCategory = new Category()
            newCategory.categoryName = formInput.categoryName
            const response = await this.categoryService.createCategory(newCategory)

            if(response.status !== 200){
                throw response
            }

            await this.ngOnInit()
            this.loading = false

        } catch (error: any) {
            if(error.status === 409){
                this.hasError = true
            }
            this.loading = false
        }
    }

    private addCheckedProp (categories: Category[]){
        const categoryWithChecked = categories.map(category => {
            return {...category,
                    checked: this.prevSelectedCategories.some(cat => cat.categoryId === category.categoryId)      
            }})

        return categoryWithChecked
    }

    private removeCheckedProp(categories: any): Category[]{
        let cat: Category[] = []

        categories.forEach((category: any) => {
            if(category.checked){
                const c = new Category()
                c.categoryId = category.categoryId
                c.categoryName = category.categoryName
    
                cat.push(c)
            }
        })

        return cat;
    }
}