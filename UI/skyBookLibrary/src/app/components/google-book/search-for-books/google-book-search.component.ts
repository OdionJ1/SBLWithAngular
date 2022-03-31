import { Component, EventEmitter, OnInit, Output } from "@angular/core";


@Component({
    selector: 'app-google-book-search',
    templateUrl: './google-book-search.component.html',
    styleUrls: ['./google-book-search.component.scss']
})
export class GoogleBookSearch implements OnInit{
    @Output() search: EventEmitter<string> = new EventEmitter()
    public loading: boolean = false
    private _searchValue: string

    public set searchValue(value: string){
        this._searchValue = value.trimStart()
    }

    public get searchValue(): string {
        return this._searchValue
    }

    ngOnInit(): void {
        const previousSearchValue = localStorage.getItem("searchValue")
        if(previousSearchValue){
            this.searchValue = previousSearchValue
        }
    }

    async searchForBooks(formInput: any, event: Event){
        event.preventDefault()
        this.loading = true
        localStorage.setItem("searchValue", this.searchValue)
        this.search.emit(formInput.searchValue)
    }
}