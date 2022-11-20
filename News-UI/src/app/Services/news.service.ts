import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

  // getting top headings news
  getTopHeadingsNews() : Observable<any>{
    return this.http.get(environment.topHeadingsUrl)
  };

  // getting politics news
  getPoliticsNews() : Observable<any>{
    return this.http.get(environment.politicsUrl)
  };

  // getting sports news
  getSportsNews() : Observable<any>{
    return this.http.get(environment.sporstUrl)
  };

  // getting business news
  getBusinessNews() : Observable<any>{
    return this.http.get(environment.businessUrl)
  };

}
