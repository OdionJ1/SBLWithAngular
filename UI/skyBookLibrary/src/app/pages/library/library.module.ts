import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/common/shared.module";
import { BookService } from "src/app/components/book/book.service";
import { WelcomeComponent } from "../welcome/welcome.component";
import { BookListComponent } from "./books/books.component";
import { LibraryComponent } from "./library.component";


@NgModule({
    declarations: [
        LibraryComponent,
        WelcomeComponent,
        BookListComponent
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