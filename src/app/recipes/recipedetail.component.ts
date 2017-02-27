import { Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'recipedetail',
  templateUrl: 'recipedetail.component.html'
})

export class RecipeDetailComponent implements OnInit {

  sub: any;
  id: string;
  item: any;

  name: string;
  method: string;
  notes: string;
  ingredients: string;
  tools: string;
  image: string;

  
  constructor(private af: AngularFire, private router: ActivatedRoute) {
    this.sub = this.router.params.subscribe((params:any) => {
        this.id = params['id'];
        console.log(this.id)
    })
  }

  ngOnInit(){
    //item.id
    this.af.database.object('/Recipes/' + this.id)
      .subscribe(item =>{
        this.name = item.Name;
        this.method = item.Method;
        this.notes = item.Notes;
        this.ingredients = item.Ingredients;
        this.tools = item.Tools;
        this.image = item.Image;

      })
  }
  
  
}

