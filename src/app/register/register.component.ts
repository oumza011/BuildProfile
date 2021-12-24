import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  psGen = '';
  eye = "fa-eye-slash";
  eye2 = "fa-eye-slash";
  psType = "password";
  psType2 = "password";
  checkLength = false;
  bCol1 = '';
  bCol2 = '';
  srcProfile = "assets/img/icon.png";
  inpFile = document.getElementById("upPicPro");
  password = "";
  checkRePass = true;
  fName = "";
  lName = "";
  checkUsername(event: any) {
    return ((event.charCode == 95) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57))
  }
  checkPassword(event: any) {
    if (event.length >= 6) {
      if (event.match(/([a-zA-Z])/) && event.match(/([0-9])/)) {
        this.bCol1 = '';
        this.password = event;
      } else {
        this.bCol1 = 'bg-red';
      }
    } else if (event.length == 0) {
      this.bCol1 = '';
      this.password = event;
    } else {
      this.bCol1 = 'bg-red';
    }
  }
  checkRePassword(event: any) {
    if (event == this.password) {
      this.bCol2 = '';
      this.checkRePass = true;
    } else {
      this.bCol2 = 'bg-red';
      this.checkRePass = false;
    }
  }
  showPass() {
    if (this.eye == "fa-eye-slash") {
      this.eye = "fa-eye";
      this.psType = "text";
    } else {
      this.eye = "fa-eye-slash";
      this.psType = "password";
    }
  }

  showPass2() {
    if (this.eye2 == "fa-eye-slash") {
      this.eye2 = "fa-eye";
      this.psType2 = "text";
    } else {
      this.eye2 = "fa-eye-slash";
      this.psType2 = "password";
    }
  }
  chootFile() {
    document.getElementById("upPicPro")?.click();
  }
  changeProfile(e: any) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.srcProfile = event.target.result;
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  toUpperF(e: any) {
    if (e.length != 0) {
      this.fName = e[0].toUpperCase() + e.substring(1);
    }

  }
  toUpperL(e: any) {
    if (e.length != 0) {
      this.lName = e[0].toUpperCase() + e.substring(1);
    }
  }
  psGenerate() {
    const numbers = '1234567890';
    const latters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&+-*/()_';
    let validChars = numbers + latters + symbols;
    let genratorPassword = '';
    for (let i = 0; i < 20; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      genratorPassword += validChars[index];
    }
    this.psGen = genratorPassword;

  }
}
