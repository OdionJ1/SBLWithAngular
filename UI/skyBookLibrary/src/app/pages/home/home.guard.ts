import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../../components/user/user.service";


@Injectable({
    providedIn: 'root'
})
export class HomePageGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!!this.userService.getCurrentUser()){
            this.router.navigate(["/welcome"])
            return false
        }
        return true
    }
}