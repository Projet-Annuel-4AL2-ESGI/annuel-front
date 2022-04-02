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
    this.httpClient.get(`http://127.0.0.1:3000/code`).subscribe(
      value => console.log(value),
      error => console.log(error.error.text)
    )
  }

  public postCode(code: Code) : Observable<string> {
    return this.httpClient.post('http://127.0.0.1:3000/code/exec', JSON.parse(JSON.stringify(code))) as Observable<string>
  }
}
