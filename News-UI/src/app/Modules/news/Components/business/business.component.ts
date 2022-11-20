import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessNews : any = [];

  constructor(private service : NewsService) { }

  ngOnInit(){

    this.service.getBusinessNews()
        .subscribe(
          data =>{
            this.businessNews = data.articles;
            console.log(data.articles)
          },
          error =>{
            console.log(error);
          }
        )

  }

}