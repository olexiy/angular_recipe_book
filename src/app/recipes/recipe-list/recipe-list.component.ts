import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test Recipe", "This is a test", "https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg"),
    new Recipe("A test Recipe", "This is a test", "https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg"),
    new Recipe("A test Recipe", "This is a test", "https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
