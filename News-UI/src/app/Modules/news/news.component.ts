import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : any = [];

  constructor(private service : NewsService) { }

  ngOnInit() {

    this.service.getTopHeadingsNews()
        .subscribe(
          data => {
            this.news = data.articles;
          },
          error =>{
            console.log(error);
          }
        )
  }

}
