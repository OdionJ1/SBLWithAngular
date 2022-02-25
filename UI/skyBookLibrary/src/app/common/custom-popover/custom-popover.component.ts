import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";

@Component({
    selector: 'app-custom-popover',
    templateUrl: './custom-popover.component.html',
    styleUrls: ['./custom-popover.component.scss']
})
export class CustomPopOverComponent implements OnInit, OnDestroy{
    @Output() closePopOver: EventEmitter<any> = new EventEmitter()
    
    constructor(private element: ElementRef){}

    ngOnInit(){
        setTimeout(() => {
            document.addEventListener('click', this.checkifClickedOutside)
        }, 0)
    }
    
    checkifClickedOutside = (event: any) => {
        if(!this.element.nativeElement.contains(event.target)){
            this.closePopOver.emit()
        }
    }

    ngOnDestroy(): void {
        document.removeEventListener('click', this.checkifClickedOutside)
    }
}