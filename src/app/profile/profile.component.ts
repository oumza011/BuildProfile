import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  eye0 = "fa-eye-slash";
  eye1 = "fa-eye-slash";
  eye2 = "fa-eye-slash";
  psType0 = "password";
  psType1 = "password";
  psType2 = "password";
  bCol0 = '';
  bCol1 = '';
  bCol2 = '';
  userName = "oumod011";
  fName = "Prawut";
  lName = "Kunkaew";
  fNameold = "Prawut";
  lNameold = "Kunkaew";
  flagEdit = false;
  flagEditPasst = false;
  inputControl = "inp-bh";
  switchInput = false;
  oldPassword = "asd123";
  password = "";
  checkRePass = true;
  srcProfile = "assets/img/profile-img-1.jpg";
  srcProfileOld = "assets/img/profile-img-1.jpg";
  openEditFrofile() {
    this.flagEdit = true;
    this.inputControl = "form-control";
    this.switchInput = true;
  }
  cancelEditFrofile() {
    this.flagEditPasst = false;
    this.flagEdit = false;
    this.srcProfile = this.srcProfileOld;
    this.inputControl = "inp-bh";
    this.fName = this.fNameold;
    this.lName = this.lNameold;
  }
  showPass0() {
    if (this.eye0 == "fa-eye-slash") {
      this.eye0 = "fa-eye";
      this.psType0 = "text";
    } else {
      this.eye0 = "fa-eye-slash";
      this.psType0 = "password";
    }
  }
  showPass1() {
    if (this.eye1 == "fa-eye-slash") {
      this.eye1 = "fa-eye";
      this.psType1 = "text";
    } else {
      this.eye1 = "fa-eye-slash";
      this.psType1 = "password";
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
  checkOldPassword(event: any){
    if (event == this.oldPassword) {
      this.bCol0 = '';
    } else {
      this.bCol0 = 'bg-red';
    }
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
  flagEditPass(){
    this.flagEditPasst = true;
  }
  cancelEditPass(){
    this.flagEditPasst = false;
  }
}
