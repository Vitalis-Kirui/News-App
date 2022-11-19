import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { AccountComponent } from './Components/account/account.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  {path : 'login', component: LoginComponent},
  {path :'register',component : RegisterComponent},
  {path :'account',component: AccountComponent},
  {path : 'forget-password', component : ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
