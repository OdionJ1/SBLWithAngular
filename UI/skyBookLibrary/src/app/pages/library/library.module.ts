import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/common/shared.module";
import { BookComponent } from "src/app/components/book/book.component";
import { BookService } from "src/app/components/book/book.service";
import { FavouritesComponent } from "src/app/pages/library/favourites/favourites.component";
import { UpdateRatingComponent } from "src/app/components/book/rating/update-rating.component";
import { ReadingListComponent } from "src/app/pages/library/reading-list/reading-list.component";
import { BooksContainerComponent } from "src/app/components/book/books-container/books-container.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookListComponent } from "./books/books.component";
import { LibraryComponent } from "./library.component";
import { UploadBookComponent } from "../../components/book/upload-book/upload-book.component";
import { CategoryPopoverComponent } from "src/app/components/book/upload-book/categories-popover/categories-popover.component";
import { CategoryService } from "src/app/components/category/category.service";
import { AuthorPopoverComponent } from "src/app/components/book/upload-book/authors-popover/authors-popover.component";
import { AuthorService } from "src/app/components/author/author.service";
import { DeleteBookComponent } from "src/app/components/book/delete-book/delete-book.component";
import { CategoriesComponent } from "./categories/categories.component";
import { UpdateCategoryComponent } from "src/app/components/category/update-category/update-category.component";
import { BooksInCategoryComponent } from "src/app/components/category/books-in-category/books-in-category.component";
import { DeleteCategoryComponent } from "src/app/components/category/delete-category/delete-category.component";


@NgModule({
    declarations: [
        LibraryComponent,
        WelcomeComponent,
        BookListComponent,
        FavouritesComponent,
        ReadingListComponent,
        UploadBookComponent,
        CategoryPopoverComponent,
        AuthorPopoverComponent,
        BookComponent,
        BooksContainerComponent,
        BookDetailComponent,
        UpdateRatingComponent,
        UpdateCategoryComponent,
        DeleteCategoryComponent,
        BooksInCategoryComponent,
        DeleteBookComponent,
        CategoriesComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    exports: [
        
    ],
    providers: [BookService, CategoryService, AuthorService],
    bootstrap: [AppComponent]
})
export class LibraryModule {}