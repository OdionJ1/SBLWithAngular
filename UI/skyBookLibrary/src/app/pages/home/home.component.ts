import { Component } from "@angular/core";
import { Page } from "src/app/data/models/page";

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent{
    year: number = new Date().getFullYear()
    public PageType = Page
}