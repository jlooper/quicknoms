import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent, PageNotFoundComponent } from './app.component';
import { HttpModule } from '@angular/http';


import { AngularFireModule, 
  FIREBASE_PROVIDERS,
  AngularFire
} from 'angularfire2';


import { AppRouting } from './app.routing';

import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipedetail.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDN14it6FJtzdqQBb_PHCKXXk0dAqAYTqM",
  authDomain: "quicknoms-91e39.firebaseapp.com",
  databaseURL: "https://quicknoms-91e39.firebaseio.com",
  storageBucket: "quicknoms-91e39.appspot.com",
  messagingSenderId: "631928188702"
}

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRouting,
    FormsModule,
    CommonModule,
    HttpModule
   ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    RecipesComponent,
    RecipeDetailComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
