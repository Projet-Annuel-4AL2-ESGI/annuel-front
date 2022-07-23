import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/Exercise";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
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
}
