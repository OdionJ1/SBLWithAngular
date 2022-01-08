import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/components/user/user.service";

@Component({
    selector: 'app-home-nav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {

    constructor(private userService: UserService){}

    public registerModalOpen: boolean = true
    public dropdownMenutoggle: boolean = false;
    public dropdownList: boolean = false

    ngOnInit(): void {
        this.userService.closeModal$.subscribe((value) => {
            this.registerModalOpen = value
        })
    }

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