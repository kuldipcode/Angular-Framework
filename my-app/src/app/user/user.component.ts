import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  profileimage: string;
  password:string;
  private user = {};

  constructor(private httpClient: HttpClient) { }

  formdata: any;
  private Url = 'http://localhost:3000/api/user/signup';
  private httpOptions = {
     headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };
  sendPostRequest(data: any): Observable<any> {
    return this.httpClient.post<any>(this.Url, data);
}
  ngOnInit() {
    this.formdata = new FormGroup({
      firstname: new FormControl("Kuldipkumar"),
      lastname: new FormControl("Prajapati"),
      email: new FormControl("kuldip.code@gmail.com"),
      profileimage: new FormControl("user.jpg"),
      password: new FormControl("temp"),
    });
  }
  onClickSubmit(data: any) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.profileimage = data.profileimage;
    this.password = data.password;

    console.log(data);
    this.sendPostRequest(data).subscribe(
      res => {
        console.log(res);
      }
);
}
}
