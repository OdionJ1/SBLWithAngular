import { Component, OnInit } from "@angular/core";
import { ILibraryNavLink, libraryNavArr } from "src/app/data/librarypage/librarypage-data";
import { Page } from "src/app/data/models/page";
import { User } from "src/app/data/models/user";


@Component({
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
    public PageType = Page
    public libraryNavLinks: ILibraryNavLink[] = libraryNavArr
    
    ngOnInit(): void {
        let user: User = JSON.parse(<string>localStorage.getItem("currentUser"));
    }
}