import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserProfile} from "../../models/UserProfile";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "../../services/UserService";

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<UserProfile> {
  constructor(public userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile> | Promise<UserProfile> | UserProfile {
    return this.userService.findOneProfile(parseInt(<string>route.paramMap.get('id')));
  }

}
