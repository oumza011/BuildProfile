import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  eye = "fa-eye-slash";
  psType = "password";
  showPass(){
    if(this.eye == "fa-eye-slash"){
      this.eye = "fa-eye";
      this.psType = "text";
    }else{
      this.eye = "fa-eye-slash";
      this.psType = "password";
    }
  }
  createReg(){
  }
}
