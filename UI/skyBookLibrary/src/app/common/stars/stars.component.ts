import { Component, Input, OnChanges, OnInit } from "@angular/core";


@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnChanges{
    @Input() size: string = 'large'
    @Input() rating: number | string;
    cropWidth: number;

    ngOnChanges(): void {
        this.cropWidth = (Number(this.rating) / 5) * 100
    }
}