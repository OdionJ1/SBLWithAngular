import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/components/user/user.service";
import { ILibraryNavLink, libraryNavArr } from "src/app/data/librarypage/librarypage-data";
import { Page } from "src/app/data/models/page";
import { User } from "src/app/data/models/user";


@Component({
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
    public user: User
    public PageType = Page
    public libraryNavLinks: ILibraryNavLink[] = libraryNavArr
    
    constructor(private userService: UserService){}

    async ngOnInit(): Promise<void> {
        let currentUser: User = this.userService.getCurrentUser();

        try {
            const response = await this.userService.getUser(<string>currentUser.userId)

            if(response.status !== 200){
                throw response
            }

            this.user = User.create(response.body)

        } catch (err: any){
            this.userService.logout()
        }
    }
}