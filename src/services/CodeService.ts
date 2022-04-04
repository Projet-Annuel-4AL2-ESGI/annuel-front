import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Code} from "../models/Code";

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getAllCodes() {
    this.httpClient.get(`https://pa-back-armshb.herokuapp.com/code`).subscribe(
      value => console.log(value),
      error => console.log(error.error.text)
    )
  }

  public postCode(code: Code) : Observable<string> {
    return this.httpClient.post('https://pa-back-armshb.herokuapp.com/code/exec', JSON.parse(JSON.stringify(code))) as Observable<string>
  }
}
