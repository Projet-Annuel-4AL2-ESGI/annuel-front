import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Code} from "../models/Code";

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  currentUser = localStorage.getItem('currentUser')

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getAllCodes() {
    this.httpClient.get(`http://127.0.0.1:3000/code`).subscribe(
      value => console.log(value),
      error => console.log(error.error.text)
    )
  }

  public postCode(code: Code): Observable<string> {
    if (this.currentUser != null) {

      const jwtJSON = JSON.parse(this.currentUser)

      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set("Authorization", "Bearer " + jwtJSON["access_token"]);

      return this.httpClient.post('http://127.0.0.1:3000/code/exec', JSON.parse(JSON.stringify(code)),
        {"headers": headers}) as Observable<string>
    }
    return this.httpClient.post('http://127.0.0.1:3000/code/exec', JSON.parse(JSON.stringify(code))) as Observable<string>
  }
}
