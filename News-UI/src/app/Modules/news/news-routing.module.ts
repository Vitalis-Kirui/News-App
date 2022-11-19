import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './Components/business/business.component';
import { PoliticsComponent } from './Components/politics/politics.component';
import { SportsComponent } from './Components/sports/sports.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  {path : 'politics', component : PoliticsComponent},
  {path : 'business', component : BusinessComponent},
  {path :'sports', component :SportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
