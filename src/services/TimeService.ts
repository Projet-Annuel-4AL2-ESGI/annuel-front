import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/Exercise";
import {Code} from "../models/Code";
import {Time} from "../models/Time";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  currentUser = localStorage.getItem('currentUser')

  constructor(private httpClient: HttpClient) {
  }

  public create(time: Time): Observable<Time> {
    return this.httpClient.post("http://127.0.0.1:3000/time/", time) as Observable<any>
  }

  public getAll(): Observable<[Time]> {
    return this.httpClient.get(`http://127.0.0.1:3000/time/`) as Observable<[Time]>
  }

  public findOne(id: number): Observable<Time> {
    return this.httpClient.get(`http://127.0.0.1:3000/time/` + id) as Observable<Time>
  }

  public update(id: number, time: Time): Observable<Time> {
    return this.httpClient.patch(`http://127.0.0.1:3000/time/`+ id, time) as Observable<any>
  }

  public getGlobalLeaderboard(): Observable<[number, number, number][]> {
    return this.httpClient.get("http://127.0.0.1:3000/time/leaderboard") as Observable<[number, number, number][]>
  }

  public getLeaderboardForExerciseId(id: number): Observable<Time[]> {
    return this.httpClient.get("http://127.0.0.1:3000/time/leaderboard/" + id) as Observable<Time[]>
  }
}
