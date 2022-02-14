import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { UserService } from "src/app/components/user/user.service";
import { ILibraryNavLink } from "src/app/data/librarypage/librarypage-data";
import { Page } from "src/app/data/models/page";
import { User } from "src/app/data/models/user";

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
    public sblMainNavRoute: string[] = []
    public currentUser: User
    public currentPath: string

    constructor(private userService: UserService, private router: Router){}
    
    ngOnInit(): void {
        this.userService.closeModal$.subscribe((value) => {
            this.registerModalOpen = value
        })

        switch(this.currentPage){
            case this.PageType.home:
                this.sblMainNavRoute = ["/home"]
                break;
            case this.PageType.library:
                this.sblMainNavRoute = ["/welcome"]
                this.currentUser = this.userService.getCurrentUser()
                break;
            case this.PageType.welcome:
                this.sblMainNavRoute = ["/welcome"]
                this.currentUser = this.userService.getCurrentUser()
                break
            default:
                this.sblMainNavRoute = ['']
        }

        this.currentPath = this.router.url

        this.router.events.subscribe((event) => {
            if(event instanceof NavigationStart){
                this.currentPath = event.url
            }
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

    logout(){
        this.userService.logout()
    }
}