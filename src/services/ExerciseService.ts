import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/Exercise";
import {Code} from "../models/Code";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  currentUser = localStorage.getItem('currentUser')

  constructor(private httpClient: HttpClient) {
  }

  public create(exercise: Exercise): Observable<Exercise> {
    return this.httpClient.post(environment.apiUrl+"/exo/", exercise) as Observable<Exercise>
  }

  public getAll(): Observable<[Exercise]> {
    return this.httpClient.get(environment.apiUrl+`/exo/`) as Observable<[Exercise]>
  }

  public findOne(id: number): Observable<Exercise> {
    return this.httpClient.get(environment.apiUrl+`/exo/` + id) as Observable<Exercise>
  }

  public verifyExo(code: Code): Observable<string> {
    if (this.currentUser != null) {

      const jwtJSON = JSON.parse(this.currentUser)

      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set("Authorization", "Bearer " + jwtJSON["access_token"]);

      return this.httpClient.post(environment.apiUrl+`/exo/validate`, JSON.parse(JSON.stringify(code)),
        {"headers": headers})  as Observable<string>
    }
    return this.httpClient.post(environment.apiUrl+`/exo/validate`, JSON.parse(JSON.stringify(code))) as Observable<string>;
  }
}
