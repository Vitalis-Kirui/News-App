import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  politicsNews : any = [];

  constructor(private service : NewsService) { }

  ngOnInit(){

    this.service.getPoliticsNews()
        .subscribe(
          data =>{
            this.politicsNews = data.articles;
          },
          error =>{
            console.log(error);
          }
        )

  }

}
