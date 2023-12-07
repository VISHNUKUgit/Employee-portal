import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email:String=""
password:String =""
login(){
  if (this.email && this.password) {
    alert("Proceed")
  } else {
    alert("fill all")
  }
}
}
