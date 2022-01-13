import { CommonModule } from "@angular/common";
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
        SharedModule,
        CommonModule
    ],
    exports: [
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class LibraryModule {}