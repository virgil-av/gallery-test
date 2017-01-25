import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imagesList: any[] = [];
  anyErrors: Error;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getImages()
      .subscribe(response =>{
        this.imagesList = response.gallery;
        console.log(response.gallery);
      },
        error => this.anyErrors = error
      )
  }



}
