import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Like} from "../models/Like";

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public like(like: Like): Observable<Like> {
    return this.httpClient.post(`http://127.0.0.1:3000/likes`, JSON.parse(JSON.stringify(like))) as Observable<Like>;
  }

  public dislike(like: Like): Observable<string> {
    return this.httpClient.delete(`http://127.0.0.1:3000/likes`,
      { "body": JSON.parse(JSON.stringify(like))}) as Observable<string>;
  }
}
