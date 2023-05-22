import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user:any; 
  formdata:any;
  ngOnInit() {
    this.formdata = new FormGroup({ 
      user: new FormControl("Tutorialspoint")
   }); 
  }
  onClickSubmit(data:any) {this.user = data.user;}
}
