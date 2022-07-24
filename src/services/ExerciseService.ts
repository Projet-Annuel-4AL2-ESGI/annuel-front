import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/Exercise";
import {Code} from "../models/Code";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  currentUser = localStorage.getItem('currentUser')

  constructor(private httpClient: HttpClient) {
  }

  public create(exercise: Exercise): Observable<Exercise> {
    return this.httpClient.post("http://127.0.0.1:3000/exo/", exercise) as Observable<Exercise>
  }

  public getAll(): Observable<[Exercise]> {
    return this.httpClient.get(`http://127.0.0.1:3000/exo/`) as Observable<[Exercise]>
  }

  public findOne(id: number): Observable<Exercise> {
    return this.httpClient.get(`http://127.0.0.1:3000/exo/` + id) as Observable<Exercise>
  }

  public verifyExo(code: Code): Observable<string> {
    if (this.currentUser != null) {

      const jwtJSON = JSON.parse(this.currentUser)

      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set("Authorization", "Bearer " + jwtJSON["access_token"]);

      return this.httpClient.post(`http://127.0.0.1:3000/exo/validate`, JSON.parse(JSON.stringify(code)),
        {"headers": headers})  as Observable<string>
    }
    return this.httpClient.post(`http://127.0.0.1:3000/exo/validate`, JSON.parse(JSON.stringify(code))) as Observable<string>;
  }
}
