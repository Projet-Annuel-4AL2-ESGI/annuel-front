import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Follow} from "../models/Follow";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  currentUser = localStorage.getItem('currentUser');

  decoded: any;

  constructor(private httpClient: HttpClient) {
  }

  public follow(follow: Follow): Observable<string> {
    return this.httpClient.post(environment.apiUrl+"/follow", JSON.parse(JSON.stringify(follow))) as Observable<string>;
  }

  public unfollow(follow: Follow): Observable<any> {
    return this.httpClient.delete(environment.apiUrl+"/follow",
      {"body": JSON.parse(JSON.stringify(follow))}) as Observable<any>;
  }

  public getFollowings(id: number): Observable<Follow> {
    return this.httpClient.get(environment.apiUrl+"/follow/following/" + id) as Observable<Follow>
  }

  public getOneFollowing(userId: number, id: number): Observable<Follow> {
    return this.httpClient.get(environment.apiUrl+"/follow/isfollowing/" + userId + "/" + id) as Observable<Follow>
  }
}
