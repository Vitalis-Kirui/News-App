import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;

  constructor(private service : FormBuilder, private router : Router, private loginService : AuthenticationService) { }

  ngOnInit() {

    this.loginForm = this.service.group({
      username : ['', [Validators.required]],
      password : ['', [ Validators.required]]
    })

  }

  // GETTER FUNCTION
  // Username function
  get username() {
    return this.loginForm.get('username');
  }

    // password function
    get password() {
      return this.loginForm.get('password');
    }

  // login function
  login(){
    // this.loginService.login(this.loginForm.value)
    //     .subscribe(
    //       data =>{
    //         localStorage.setItem('token', data.token);

    //         // Navigating to home page after login
    //         this.router.navigate(['/'])
    //       },
    //       error =>{
    //       console.log(error);
    //       }
    //     )
  }

  // navigating to register page
  register() {
    this.router.navigate(['/authentication/register']);
  };

}
