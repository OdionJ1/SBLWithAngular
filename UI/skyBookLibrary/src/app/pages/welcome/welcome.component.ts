import { Component } from "@angular/core";
import { Page } from "src/app/data/models/page";


@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public PageType = Page
}