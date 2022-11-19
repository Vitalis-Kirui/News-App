import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authentication', loadChildren: () => import('./Modules/authentication/authentication.module').then(m => m.AuthenticationModule) }, 
  { path: 'news', loadChildren: () => import('./Modules/news/news.module').then(m => m.NewsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
