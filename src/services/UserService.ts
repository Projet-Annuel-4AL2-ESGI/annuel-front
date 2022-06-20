import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from "../models/User";

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
}
