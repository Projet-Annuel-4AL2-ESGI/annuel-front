import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Like} from "../models/Like";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public like(like: Like): Observable<Like> {
    return this.httpClient.post(environment.apiUrl+`/likes`, JSON.parse(JSON.stringify(like))) as Observable<Like>;
  }

  public dislike(like: Like): Observable<string> {
    return this.httpClient.delete(environment.apiUrl+`/likes`,
      {"body": JSON.parse(JSON.stringify(like))}) as Observable<string>;
  }
}
