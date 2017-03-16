import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../models/video.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'videos',
  templateUrl: 'videos.component.html'
})

export class VideosComponent implements OnInit {

public videos : any;
v1 : any;
v1cleaned : any;

  constructor(private router: Router, private sanitizer: DomSanitizer)
  {}

  ngOnInit(){

    //this.v1cleaned = this.sanitizer.bypassSecurityTrustUrl('//www.youtube.com/embed/FQSSsmTroMk');
    //this.v1 = this.v1cleaned.changingThisBreaksApplicationSecurity;
    this.v1 = this.sanitizer.bypassSecurityTrustUrl('youtube.com/embed/FQSSsmTroMk');

  

    
      const VIDEOS: Video[] = [
        { Title: "Church Window Cookies", EmbedUrl: '//www.youtube.com/embed/FQSSsmTroMk' },
        { Title: "Pasta with Meat Sauce", EmbedUrl: '//www.youtube.com/embed/_MIdbZml6r4?list=UUpLxEusuFWB8cZXyiXs4qew' },
        { Title: "Pizza", EmbedUrl: '//www.youtube.com/embed/i9QToeYHTmQ' },
        { Title: "Kale Salad", EmbedUrl: '//www.youtube.com/embed/1eqjq_eoeQM' },
        { Title: "Maple Syrup Snow Candy", EmbedUrl: '//www.youtube.com/embed/5e5MUxhmBWk' },        
      ];

      this.videos = VIDEOS;
  }

  cleanURL(oldURL: any)  {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }



}