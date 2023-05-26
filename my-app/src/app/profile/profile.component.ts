import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  user = { name: 'John Doe' };
  isEditing = false;
  editedName: string;
  data: any;
  gotData: any;
  patchedData: any;

  private Url = 'http://localhost:3000/api/user/profile';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.editedName = this.user.name; // Initialize editedName with current name value
    }
  }

  saveEdit(): void {
    this.user.name = this.editedName; // Update user name with edited value
    this.isEditing = false;
  }
  sendGetRequest(): Observable<any> {
    return this.httpClient.get<any>(this.Url);
  }
  sendPatchRequest(data: any): Observable<any> {
    return this.httpClient.patch<any>(this.Url, data);
  }
  ngOnInit() {
    this.sendGetRequest().subscribe(
      res => {
        this.gotData = [res.message];
        console.log(this.gotData);
      }
    );
    this.data = {
      "firstname": "Kuldipkumar",
      "lastname": "Prajapati",
      "email": "kuldip.de@gmail.com",
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

