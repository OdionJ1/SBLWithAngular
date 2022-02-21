import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/common/shared.module";
import { BookComponent } from "src/app/components/book/book.component";
import { BookService } from "src/app/components/book/book.service";
import { FavouritesComponent } from "src/app/pages/library/favourites/favourites.component";
import { EditRatingComponent } from "src/app/components/book/rating/edit-rating.component";
import { ReadingListComponent } from "src/app/pages/library/reading-list/reading-list.component";
import { BooksContainerComponent } from "src/app/components/book/books-container/books-container.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookListComponent } from "./books/books.component";
import { LibraryComponent } from "./library.component";
import { UploadBookComponent } from "./upload-book/upload-book.component";


@NgModule({
    declarations: [
        LibraryComponent,
        WelcomeComponent,
        BookListComponent,
        FavouritesComponent,
        ReadingListComponent,
        UploadBookComponent,
        BookComponent,
        BooksContainerComponent,
        BookDetailComponent,
        EditRatingComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    exports: [
        
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class LibraryModule {}