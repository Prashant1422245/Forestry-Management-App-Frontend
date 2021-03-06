import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = new Login();
  // @Output() isLoginSuccessfull=false;
  message = '';
  userData = new User();
  constructor(
    private registration: RegistrationService,
    private router: Router // here ROUTER (NOT ROUTE)
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.registration.loginUserFromRemote(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        console.log(this.userData);

        //  this.isLoginSuccessfull=true;
        sessionStorage.setItem('Login', this.loginData.email)
        this.userDetails(this.loginData.email);
        // this.router.navigate(['/user-services']);
      },
      error => {
        console.log("exception occured");
        this.message = error.error;
        //   this.message="BAD Credentials, please enter valid emailId and password"
      }
    );
  }


  // isUserLoghedIn(){
  //   let variable=sessionStorage.getItem('emailId');
  //   console.log(!(variable===null))
  //   return !(variable===null)
  // }

  gotoRegitration() {
    this.router.navigate(['/registration'])

  }


  userDetails(email: String) {
    this.router.navigate([`/products`, email])

  }


}
