import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/components/book/upload-book/categories-popover/category.service";
import { Category } from "src/app/data/models/category";


@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
    public categories: Category[]
    public categoryToUpdate: Category
    public renameModalOpen: boolean = false

    constructor(private categoryService: CategoryService){}

    async ngOnInit(): Promise<void>{
        this.categories = await this.categoryService.getCategories()
    }

    openRenameModal(category: Category){
        this.categoryToUpdate = category
        this.renameModalOpen = true
    }

    async closeRenameModal(): Promise<void> {
        this.renameModalOpen = false
        await this.ngOnInit()
    }
}