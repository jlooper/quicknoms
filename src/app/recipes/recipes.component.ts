import { Component, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'recipes',
  templateUrl: 'recipes.component.html'
})

export class RecipesComponent {

  items: FirebaseListObservable<any[]>;

  id: string;
  cleanedImage: any;
  private sub: any;
  title: string;

  constructor(af: AngularFire, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private router: Router) {

    this.sub = this.activatedRoute.params.subscribe((params:any) => {
        this.id = params['id'];
    })

    this.items = af.database.list('/Recipes', {
      query: {
        orderByChild: 'Approved',
        equalTo: true
      }
      
    });
    this.items.subscribe(queriedItems => {
        for (let prop in queriedItems){
              this.cleanedImage = this.sanitizer.bypassSecurityTrustUrl(queriedItems[prop].Image);
              queriedItems[prop].Image = this.cleanedImage.changingThisBreaksApplicationSecurity;
        }  
    });
  }
  filter(id: string) : boolean{
     if (this.id == id || this.id == "all"){
       console.log("page is", this.id)
       switch (this.id)
      {
        case "meat":
          this.title = "Meat Recipes";
          break;
        case "soupssalads":
          this.title = "Soup and Salad Recipes";
          break;
        case "snacks":
          this.title = "Snack Recipes";
          break;
        case "desserts":
          this.title = "Dessert Recipes";
          break;
        case "vegetarian":
          this.title = "Vegetarian Recipes";
          break;
        case "everythingelse":
          this.title = "Everything Else";
          break;
        case "all":
          this.title = "All Recipes";
          break;
       default : "Recipes";
      }
       return false;
     }
     return true;
  }
  choose(item: any){
     this.router.navigate(['/recipe', item.$key]);
  } 
}

