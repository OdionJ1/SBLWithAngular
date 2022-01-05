import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home-nav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent {

    constructor(private router: Router){}

    public registerModalOpen: boolean = false
    public dropdownMenutoggle: boolean = false;
    public dropdownList: boolean = false


    toggleDropDownMenu(){
        this.dropdownMenutoggle = !this.dropdownMenutoggle
        setTimeout(() => {
            this.dropdownList = !this.dropdownList
        }, 200)
    }

    openRegisterModal(){
        this.registerModalOpen = true
    }
}