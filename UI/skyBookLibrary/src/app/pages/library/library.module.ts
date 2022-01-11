import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/common/shared.module";
import { WelcomeComponent } from "../welcome/welcome.component";
import { LibraryComponent } from "./library.component";


@NgModule({
    declarations: [
        LibraryComponent,
        WelcomeComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class LibraryModule {}