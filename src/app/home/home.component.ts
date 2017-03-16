import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
var firebase = require('firebase');
import { AngularFire} from 'angularfire2';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  public error: string;
  public message: string;

  constructor(private af: AngularFire, 
    private router: Router,
    private _http: Http) 
  { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(localStorage.getItem("currFile"));
      const recipes = this.af.database.list('/Recipes');
      recipes.push({ Name: formData.value.Name, Ingredients: formData.value.Ingredients, Method: formData.value.Method, Tools: formData.value.Tools, Notes: formData.value.Notes, Image: localStorage.getItem("currFile"), Category: formData.value.Category, Approved: false, Date: 0 - Date.now()  })
      .then(
        (success) => {
          this.message = "Thank you for submitting a recipe!";
          formData.reset();
      }).catch(
        (err) => {
          this.error = "There was a problem submitting your recipe. Please try again!";       
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }

  fileChange(event) {
    var files = event.srcElement.files;
    var file = files[0];
    var storageUrl = 'images/';
    var name = `img-${Date.now()}.jpg`;
    var storageRef = firebase.storage().ref(storageUrl + name);
    storageRef.put(file).then(function(snapshot) {
      //get the download URL
      console.log(snapshot.downloadURL)
      localStorage.setItem("currFile",snapshot.downloadURL);
    }); 
  }

}