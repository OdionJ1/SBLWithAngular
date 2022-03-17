import { Component, EventEmitter, Output, HostListener, ElementRef, ViewChild, Input } from "@angular/core";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
    @Output() closeModal: EventEmitter<any> = new EventEmitter()
    @ViewChild('modalBody') modalBody: ElementRef
    @Input() closeOnClickOutside: boolean = false
    
    constructor(){}
    
    @HostListener('click', ['$event']) close(event: any){
        if(this.closeOnClickOutside){
            if(!this.modalBody.nativeElement.contains(event.target)){
                this.closeModal.emit()
            }
        }
    }
}