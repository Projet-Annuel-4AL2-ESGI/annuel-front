import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getPosts(): Observable<Post> {
    return this.httpClient.get(`http://127.0.0.1:3000/post/`) as Observable<Post>
  }
}
