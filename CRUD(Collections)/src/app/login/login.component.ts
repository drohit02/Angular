import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dataService :DataService,private route:Router){}

  login(loginData:any){
    const userObj = loginData;
    const status = this.dataService.users.find(user=> user.username===userObj.username && user.password===userObj.password)
    if(status){
      console.log("login sucessfull");
      this.route.navigate(['allUser']);
    }
    else{
      alert("Invalid username of password");
    }

  }
}
