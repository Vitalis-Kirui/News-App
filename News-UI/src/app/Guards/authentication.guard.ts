import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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