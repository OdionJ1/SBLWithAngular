import { Component } from "@angular/core";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent{
    year: number = new Date().getFullYear()
}