import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  imagesService = 'http://www.appsme.com/InterviewChallenge';

  constructor(private http: Http) { }


  getImages(){
    return this.http.get(this.imagesService)
      .map(response => response.json())
  }

}
