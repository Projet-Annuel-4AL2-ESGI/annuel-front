import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {PostLikes} from "../models/PostLikes";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {
  }

  public create(post: Post): Observable<Post>{
    return this.httpClient.post("http://127.0.0.1:3000/post/", post) as Observable<Post>
  }

  public getPosts(): Observable<[Post]> {
    return this.httpClient.get(`http://127.0.0.1:3000/post/`) as Observable<[Post]>
  }

  public getPostsLikes(id: number): Observable<[PostLikes]> {
    return this.httpClient.get(`http://127.0.0.1:3000/post/liked/`+id) as Observable<[PostLikes]>
  }
}
