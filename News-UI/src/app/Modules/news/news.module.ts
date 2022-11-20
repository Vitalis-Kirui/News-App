import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SportsComponent } from './Components/sports/sports.component';
import { PoliticsComponent } from './Components/politics/politics.component';
import { BusinessComponent } from './Components/business/business.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NewsComponent,
    SportsComponent,
    PoliticsComponent,
    BusinessComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
