import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-custom-button',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
    @Input() isDisabled: boolean = false
    @Input() hasSpinner: boolean = false
    @Input() buttonType: string
    @Input() buttonText: string
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
}