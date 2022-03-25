import { Component, Input, OnInit } from "@angular/core";
import { Book } from "src/app/data/models/book";
import { Category } from "src/app/data/models/category";
import { CategoryService } from "../category.service";

@Component({
    selector: 'app-books-in-category',
    templateUrl: './books-in-category.component.html',
    styleUrls: ['./books-in-category.component.scss']
})
export class BooksInCategoryComponent implements OnInit {
    @Input() selectedCategory: Category
    public books: Book[]
    public noBooks: boolean = false

    constructor(private categoryService: CategoryService){}

    async ngOnInit(): Promise<void> {
        this.books = await this.categoryService.getBooksInCategory(<number>this.selectedCategory.categoryId)

        if(!this.books.length){
            this.noBooks = true
        }
    }
}