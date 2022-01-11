import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/components/user/user.service";
import { ILibraryNavLink } from "src/app/data/librarypage/librarypage-data";
import { Page } from "src/app/data/models/page";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {

    @Input() currentPage: Page
    @Input() libraryNavLinks: ILibraryNavLink[]
    public registerModalOpen: boolean = true
    public dropdownMenutoggle: boolean = false;
    public dropdownList: boolean = false
    PageType = Page

    constructor(private userService: UserService){}
    

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