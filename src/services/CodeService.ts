import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Code} from "../models/Code";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  currentUser = localStorage.getItem('currentUser')

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getAllCodes() {
    this.httpClient.get(environment.apiUrl+`/code`).subscribe(
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

      return this.httpClient.post(environment.apiUrl+'/code/exec', JSON.parse(JSON.stringify(code)),
        {"headers": headers}) as Observable<string>
    }
    return this.httpClient.post(environment.apiUrl+'/code/exec', JSON.parse(JSON.stringify(code))) as Observable<string>
  }
}
