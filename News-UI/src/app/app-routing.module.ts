import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { Error404Component } from './Components/error404/error404.component';

const routes: Routes = [
  {path :'', redirectTo : 'news', pathMatch : 'full'},
  {path : 'about-us', component : AboutUsComponent},
  { path: 'authentication', loadChildren: () => import('./Modules/authentication/authentication.module').then(m => m.AuthenticationModule) }, 
  { path: 'news', loadChildren: () => import('./Modules/news/news.module').then(m => m.NewsModule) },
  {path : '**', component : Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
