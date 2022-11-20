import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNews : any = [];

  constructor(private service : NewsService) { }

  ngOnInit() {

    this.service.getSportsNews()
        .subscribe(
          data =>{
            this.sportsNews = data.articles;
          },
          error =>{
            console.log(error);
          }
        )

  }

}
