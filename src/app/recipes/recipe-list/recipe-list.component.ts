import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Pizza!', 'This is a pizza recipe', 'https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg'),
    new Recipe('A Spagetti!', 'This is a spagetti recipe', 'https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg'),
    new Recipe('A Tiramisu!', 'This is a tiramisu recipe', 'https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg')
  ];

  constructor() { }

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
