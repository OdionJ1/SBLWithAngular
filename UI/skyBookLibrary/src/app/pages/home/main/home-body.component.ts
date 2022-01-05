import { Component } from "@angular/core";
import { homepageData, IFeature } from "src/app/data/homepage/homepage-data";

@Component({
    templateUrl: './home-body.component.html',
    styleUrls: ['./home-body.component.scss']
})

export class HomeBodyComponent {
    public features: IFeature[] = homepageData
}