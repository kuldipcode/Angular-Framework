import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password:string;
  private user = {};
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { 
   
  }

  formdata: any;
  resdata:any;
  private Url = 'http://localhost:3000/api/user/login';
  private httpOptions = {
     headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };
  sendPostRequest(data: any): Observable<any> {
    return this.httpClient.post<any>(this.Url, data);
}
  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl("kuldip.code@gmail.com"),
      password: new FormControl("tempPass"),
    });
  }
  onClickSubmit(data: any) {
    this.email = data.email;
    this.password = data.password;

    console.log(data);
    this.sendPostRequest(data).subscribe(
      res => {
        this.resdata = res;
        console.log(res);
        this.router.navigate(['../profile'], { relativeTo: this.route });
      }
);
}
}

