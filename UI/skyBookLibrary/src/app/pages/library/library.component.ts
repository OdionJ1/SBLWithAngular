import { Component, OnInit } from "@angular/core";
import { User } from "src/app/data/models/user";


@Component({
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
    
    ngOnInit(): void {
        let user: User = JSON.parse(<string>localStorage.getItem("currentUser"));
        console.log(user)
    }
}