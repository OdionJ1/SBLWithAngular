import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/components/category/category.service";
import { Category } from "src/app/data/models/category";


@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
    public categories: Category[]
    public selectedCategory: Category
    public modalOpen: boolean = false
    public modalId: number = 0

    constructor(private categoryService: CategoryService){}

    async ngOnInit(): Promise<void>{
        this.categories = await this.categoryService.getCategories()
    }
    
    async closeModal(): Promise<void> {
        this.modalOpen = false
        this.modalId = 0
        await this.ngOnInit()
    }
    
    openRenameModal(category: Category){
        this.selectedCategory = category
        this.modalId = 0
        this.modalOpen = true
    }


    openGetBooksModal(category: Category){
        this.selectedCategory = category
        this.modalOpen = true
        this.modalId = 1
    }

    openDeleteCategory(category: Category){
        this.selectedCategory = category
        this.modalOpen = true
        this.modalId = 2
    }
}