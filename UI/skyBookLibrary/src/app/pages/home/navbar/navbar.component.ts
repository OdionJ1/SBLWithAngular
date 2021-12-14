import { Component } from "@angular/core";

@Component({
    selector: 'app-home-nav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent {

    dropdownMenutoggle: boolean = false;
    dropdownList: boolean = false


    toggleDropDownMenu(){
        this.dropdownMenutoggle = !this.dropdownMenutoggle
        setTimeout(() => {
            this.dropdownList = !this.dropdownList
        }, 200)
    }
}