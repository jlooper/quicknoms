import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  constructor(private af: AngularFire, private router: Router) {
  } 
}


@Component({
  templateUrl: 'page.not.found.html'
})

export class PageNotFoundComponent {}