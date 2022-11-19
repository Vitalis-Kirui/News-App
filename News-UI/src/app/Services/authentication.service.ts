import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient, private router : Router) { }

  // Register function
  register(user : any){
   return this.http.post<any>(environment.registerUrl, user)
  };

  // login function
  login(user : any){
    return this.http.post<any>(environment.loginUrl, user)
  };

  // Checking logged in state
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  // Log out user
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  };

  // Get token from local storage
  getToken(){
    return localStorage.getItem('token');
  }

}
