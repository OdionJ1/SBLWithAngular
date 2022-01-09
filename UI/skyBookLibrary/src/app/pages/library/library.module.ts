import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { LibraryComponent } from "./library.component";


@NgModule({
    declarations: [
        LibraryComponent
    ],
    imports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class LibraryModule {}