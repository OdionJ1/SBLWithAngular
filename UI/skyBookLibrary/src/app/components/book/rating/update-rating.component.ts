import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-update-rating',
    templateUrl: './update-rating.component.html',
    styleUrls: ['./update-rating.component.scss']
})
export class UpdateRatingComponent implements OnInit {
    @Input() bookTitle: string
    @Input() rating: number
    @Output() rate: EventEmitter<number> = new EventEmitter()
    public loading: boolean = false

    private _ratingValue: string

    public get ratingValue (): string {
        return this._ratingValue.toString() //Need to convert to string for the form
    }

    public set ratingValue(value: string){
        this._ratingValue = value //Need to convert to a number for the back-end
    }

    ngOnInit(): void {
        this.ratingValue = this.rating.toString()
    }

    public invalidNumber(): boolean {
        return Number(this.ratingValue) < 1 || Number(this.ratingValue) > 5
    }

    public rateBook(formInput: any, event: Event){
        event.preventDefault()
        this.loading = true
        this.rate.emit(Number(formInput.rating))
        this.loading = false
    }
}