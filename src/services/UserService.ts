import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from "../models/User";
import {UserFollow} from "../models/UserFollow";
import {UserProfile} from "../models/UserProfile";
import {UserImage} from "../models/UserImage";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get(environment.apiUrl+`/user/`) as Observable<User[]>
  }

  public createUser(user: User): Observable<User> {
    console.log(JSON.stringify(user))
    return this.httpClient.post(environment.apiUrl+`/user/`, JSON.parse(JSON.stringify(user))) as Observable<User>
  }

  public findOne(id: number): Observable<User | undefined> {
    return this.httpClient.get(environment.apiUrl+`/user/` + id) as Observable<User | undefined>
  }

  public findOneByMail(email: string | undefined): Observable<User | undefined> {
    return this.httpClient.get(environment.apiUrl+`/user/mail/` + email) as Observable<User | undefined>
  }

  public findOneProfile(id: number): Observable<UserProfile> {
    return this.httpClient.get(environment.apiUrl+`/user/profile/` + id) as Observable<UserProfile>
  }

  public login(username: string | undefined, password: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl+`/auth/login`,
      {username: username, password: password}) as Observable<any>
  }

  public getNewFollows(id: number): Observable<UserFollow[]> {
    return this.httpClient.get(environment.apiUrl+'/user/follow/' + id) as Observable<UserFollow[]>
  }

  public updateImage(id: number, updateImage: UserImage): Observable<string> {
    return this.httpClient.post(environment.apiUrl+'/user/upload/' + id, JSON.parse(JSON.stringify(updateImage))) as Observable<string>
  }

  public getFollowersList(id: number): Observable<UserFollow[]> {
    return this.httpClient.get(environment.apiUrl+'/user/follow/list/' + id) as Observable<UserFollow[]>
  }

  public getFollowingList(id: number): Observable<UserFollow[]> {
    return this.httpClient.get(environment.apiUrl+'/user/following/list/' + id) as Observable<UserFollow[]>
  }
}
