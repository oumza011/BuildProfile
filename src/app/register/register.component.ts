import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fileToUpload: File | null = null;
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
  checkRePass = false;
  fName = "";
  lName = "";
  dubUser = false;
  enableSave = false;
  checkPass = false;
  constructor(private http: HttpClient) { }

  checkUsername(event: any) {
    this.dubUser = false;
    return ((event.charCode == 95) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57))
  }
  checkName(event: any) {
    return (event.charCode != 32);
  }
  hasAllInput() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var pass = (<HTMLInputElement>document.getElementById("password")).value;
    var repass = (<HTMLInputElement>document.getElementById("rePass")).value;
    var fname = (<HTMLInputElement>document.getElementById("fname")).value;
    var lname = (<HTMLInputElement>document.getElementById("lname")).value;
    if (username == '' || pass == '' || repass == '' || fname == '' || lname == '') {
      this.enableSave = false;
    } else {
      if (this.checkRePass || this.checkPass) {
        this.enableSave = false;
      } else {
        this.enableSave = true;
      }

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
      this.password = '';
    } else {
      this.bCol1 = 'bg-red';
    }
    if (this.bCol1 == '') {
      this.checkPass = false;
    } else {
      this.checkPass = true;
    }
    var repass = (<HTMLInputElement>document.getElementById("rePass")).value;
    if (this.password != repass) {
      this.bCol2 = 'bg-red';
      this.checkRePass = true;
    } else {
      this.bCol2 = '';
      this.checkRePass = false;
    }
  }
  checkRePassword(event: any) {
    if (event == this.password) {
      this.bCol2 = '';
      this.checkRePass = false;
    } else {
      this.bCol2 = 'bg-red';
      this.checkRePass = true;
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
  uploadFile(e:any) {
    console.log(e);
    this.http.post('http://localhost:3000/upload',e).subscribe(result =>{
    console.log(result);
    });
  }
  changeProfile(e: any) {
    console.log(e.target.files[0]);
    this.fileToUpload = e.target.files[0];
    // this.uploadFile(this.fileToUpload);
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
  checkUser() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    let data = {
      "username": username,
    };
    this.http.get<any>('http://localhost:3000/checkuser', { params: data }).subscribe(result => {
      console.log(result.result);
      if (result.result == 0) {
        this.registerProfile();
      } else {
        this.dubUser = true;
      }
    })
  }
  registerProfile() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = this.password;
    var fname = this.fName;
    var lname = this.lName;
    var filepart = (<HTMLInputElement>document.getElementById("upPicPro")).value;
    var filename = filepart.split("\\");
    var pic_profile = "";
    console.log(filename);
    if(filepart == ''){
      var pic_profile = "icon.png";
    }else{
      var pic_profile = filename[2];
    }

    let data = {
      "username": username,
      "password": password,
      "fname": fname,
      "lname": lname,
      "pic_profile": pic_profile
    };
    // console.log(data);
    this.http.post<any>('http://localhost:3000/register', data).subscribe(result => {
      if(result.result == "Success"){
        alert('ลงทะเบียนสำเร็จ!!');
      }else{
        alert('Register Faild!!');
      }
      alert(JSON.stringify(result));

    })
  }

}
