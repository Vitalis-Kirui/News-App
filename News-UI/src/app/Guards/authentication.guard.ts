import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private service : AuthenticationService , private router : Router){}

  canActivate() : any{
    if(this.service.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/authentication/login']);
      return false;
    }
  }
  
}