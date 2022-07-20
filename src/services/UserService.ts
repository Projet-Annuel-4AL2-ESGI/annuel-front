import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from "../models/User";
import {UserFollow} from "../models/UserFollow";
import {UserProfile} from "../models/UserProfile";
import {UserImage} from "../models/UserImage";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get(`http://127.0.0.1:3000/user/`) as Observable<User[]>
  }

  public createUser(user: User): Observable<User> {
    console.log(JSON.stringify(user))
    return this.httpClient.post(`http://127.0.0.1:3000/user/`, JSON.parse(JSON.stringify(user))) as Observable<User>
  }

  public findOne(id: number): Observable<User | undefined> {
    return this.httpClient.get(`http://127.0.0.1:3000/user/` + id) as Observable<User | undefined>
  }

  public findOneByMail(email: string | undefined): Observable<User | undefined> {
    return this.httpClient.get(`http://127.0.0.1:3000/user/mail/` + email) as Observable<User | undefined>
  }

  public findOneProfile(id: number): Observable<UserProfile> {
    return this.httpClient.get(`http://localhost:3000/user/profile/`+ id) as Observable<UserProfile>
  }

  public login(username: string | undefined, password: string): Observable<any> {
    return this.httpClient.post(`http://127.0.0.1:3000/auth/login`,
                          { username : username, password: password}) as Observable<any>
  }
  public getNewFollows(id: number): Observable<UserFollow[]> {
    return this.httpClient.get('http://127.0.0.1:3000/user/follow/' + id) as Observable<UserFollow[]>
  }
  public updateImage(id: number, updateImage: UserImage): Observable<string> {
    return this.httpClient.post('http://localhost:3000/user/upload/'+ id, JSON.parse(JSON.stringify(updateImage))) as Observable<string>
  }
  public getFollowersList(id: number): Observable<UserFollow[]> {
    return this.httpClient.get('http://localhost:3000/user/follow/list/'+ id) as Observable<UserFollow[]>
  }
  public getFollowingList(id: number): Observable<UserFollow[]> {
    return this.httpClient.get('http://localhost:3000/user/following/list/'+ id) as Observable<UserFollow[]>
  }
}
