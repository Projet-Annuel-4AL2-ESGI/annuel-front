import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/Comment"
import {CommentGet} from "../models/CommentGet";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  currentUser = localStorage.getItem('currentUser');
  decoded: any;

  constructor(private httpClient: HttpClient) {
  }


  public createComment(comment: Comment): Observable<CommentGet> {
    if (this.currentUser != null) {

      const jwtJSON = JSON.parse(this.currentUser)

      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set("Authorization", "Bearer " + jwtJSON["access_token"]);
      return this.httpClient
        .post(environment.apiUrl+"/comment", JSON.parse(JSON.stringify(comment)),
          {"headers": headers}) as Observable<CommentGet>;
    }
    return this.httpClient
      .post(environment.apiUrl+"/comment", JSON.parse(JSON.stringify(comment))) as Observable<CommentGet>;
  }

  public getCommentsByPost(id: number): Observable<CommentGet[]> {
    return this.httpClient.get(environment.apiUrl+"/comment/post/" + id) as Observable<CommentGet[]>;
  }
}
