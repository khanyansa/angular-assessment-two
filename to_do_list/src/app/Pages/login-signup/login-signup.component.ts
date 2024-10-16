import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {


  activeForm: 'login' | 'signup' = 'login';
  signupObj: signupModel = new signupModel();
  loginObj: loginModel = new loginModel();
  constructor(private _snackbar:MatSnackBar, private _router:Router){}

  toggleForm(form: 'login' | 'signup'){

    this.activeForm = form;

  }

  signupForm(){
    debugger;
    const localusers =localStorage.getItem('users');
    if(localusers != null){
      const users = JSON.parse(localusers);
      users.push(this.signupObj);
      localStorage.setItem('users', JSON.stringify(users));
    }
    else{
      const users = []
      users.push(this.signupObj)
      localStorage.setItem('users', JSON.stringify(users))
    }
    this._snackbar.open('You have successfully signed up!', 'Close');
  }

  loginForm(){
    debugger;
    const localusers = localStorage.getItem('users');
    if(localusers != null){
      const users = JSON.parse(localusers);
      const isUserExist =users.find((user:signupModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password)
      if(isUserExist != undefined){
        this._snackbar.open('Login successful!', 'Close');
        localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
        this._router.navigateByUrl('/dashboard');
      }
      else{
        this._snackbar.open('Email or Password is incorrect!');
      }
    }
  }
}
export class signupModel{
  name: string;
  email: string;
  password: string;
  constructor(){
    this.name = "";
    this.email = "";
    this.password = "";
  }
}
export class loginModel{
  email: string;
  password: string;
  constructor(){
    this.email = "";
    this.password = "";
  }
}



