import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Follow} from "../models/Follow";
import {Observable} from "rxjs";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  currentUser = localStorage.getItem('currentUser');

  decoded: any;

  constructor(private httpClient: HttpClient) {
  }
  public follow(follow: Follow) : Observable<string>{
    return this.httpClient.post("http://localhost:3000/follow", JSON.parse(JSON.stringify(follow))) as Observable<string>;
  }

  public unfollow(follow: Follow) : Observable<any>{
    return this.httpClient.delete("http://localhost:3000/follow",
      {"body": JSON.parse(JSON.stringify(follow))}) as Observable<any>;
  }

  public getFollowings(id: number) : Observable<Follow> {
    return this.httpClient.get("http://localhost:3000/follow/following/" + id) as Observable<Follow>
  }
}
