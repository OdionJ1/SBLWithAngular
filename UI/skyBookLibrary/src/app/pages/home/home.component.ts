import { Component } from "@angular/core";
import { homepageData, IFeature } from "src/app/data/homepage/homepage-data";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent{
    public features: IFeature[] = homepageData
}