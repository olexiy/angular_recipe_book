import {Recipe} from '../shared/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Pizza!', 'This is a pizza recipe', 'https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg'),
        new Recipe('A Spagetti!', 'This is a spagetti recipe', 'https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg'),
        new Recipe('A Tiramisu!', 'This is a tiramisu recipe', 'https://www.feastingathome.com/wp-content/uploads/2020/04/20-Spring-Recipes.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }

}
