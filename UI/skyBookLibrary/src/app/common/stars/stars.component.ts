import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
    @Input() rating: number;
    cropWidth: number;

    ngOnInit(): void {
        this.cropWidth = (this.rating / 5) * 100
    }
}