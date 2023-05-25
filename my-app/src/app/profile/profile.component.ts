import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  data: any;
  gotData:any;
  patchedData:any;

  private Url = 'http://localhost:3000/api/user/profile';
  private httpOptions = {
     headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };
  sendGetRequest(): Observable<any> {
    return this.httpClient.get<any>(this.Url);
}
sendPatchRequest(data: any): Observable<any> {
  return this.httpClient.post<any>(this.Url, data);
}
  ngOnInit() {
    this.sendGetRequest().subscribe(
      res => {
        this.gotData = res.message;
        console.log(this.gotData);
      }
);
this.data = {
  "firstname": "Kuldipkumar",
  "lastname": "Prajapati",
  "email": "kuldip.code@gmail.com",
  "profileimage": "pat"
};
this.sendPatchRequest(this.data).subscribe(
  res => {
    this.patchedData = res;
    console.log(res);
  }
);
  }



}

