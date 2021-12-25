import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router){}
  eye = "fa-eye-slash";
  psType = "password";
  username = "";
  password = "";
  showPass() {
    if (this.eye == "fa-eye-slash") {
      this.eye = "fa-eye";
      this.psType = "text";
    } else {
      this.eye = "fa-eye-slash";
      this.psType = "password";
    }
  }
  createReg() {
  }
  processLogin() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var md5 = require('md5');
    // alert(md5("message"));
    if(username == "oumod011" && password == "asd123"){
      this.router.navigate(['/profile']);
    }else{
      alert("ีusername or password ไม่ถูกต้อง!!");
    }
  }
}
