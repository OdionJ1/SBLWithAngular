import { Component, Input } from "@angular/core";
import { homepageData, IFeature } from "src/app/data/homepage/homepage-data";
import { Page } from "src/app/data/models/page";

@Component({
    selector: 'app-main',
    templateUrl: './home-body.component.html',
    styleUrls: ['./home-body.component.scss']
})

export class HomeBodyComponent {
    @Input() currentPage: Page
    public features: IFeature[] = homepageData
    public PageType = Page
}