import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private Url = 'http://localhost:3000/api/user/signup';
  private httpOptions = {
     headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };

  constructor(private httpClient : HttpClient) { } 

  

}
