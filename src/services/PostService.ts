import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {PostLikes} from "../models/PostLikes";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {
  }

  public create(post: Post): Observable<Post> {
    return this.httpClient.post(environment.apiUrl+"/post/", post) as Observable<Post>
  }

  public getPosts(): Observable<[Post]> {
    return this.httpClient.get(environment.apiUrl+`/post/`) as Observable<[Post]>
  }

  public getPostsLikes(id: number): Observable<[PostLikes]> {
    return this.httpClient.get(environment.apiUrl+`/post/liked/` + id) as Observable<[PostLikes]>
  }
}
