import {Recipe} from '../shared/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('A Pizza!',
                    'This is a pizza recipe',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kartoffel_pizza_%28with_border%29.jpg/221px-Kartoffel_pizza_%28with_border%29.jpg',
                    [
                        new Ingridient('Meat', 1),
                        new Ingridient('Cheez', 2),
                        new Ingridient('Flour', 2)
                    ]),
        new Recipe('A Pasta!',
                    'This is a pasta recipe',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/251px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg',
                    [  new Ingridient('Flour', 4)]),
        new Recipe('A Tiramisu!',
                    'This is a tiramisu recipe',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/300px-Tiramisu_-_Raffaele_Diomede.jpg',
                    [
                        new Ingridient('Flour', 2),
                        new Ingridient('Rikotta', 5)
                    ])
      ];

        getRecipes() {
            return this.recipes.slice();
        }

        addIngridientsToShoppingList(ingridients: Ingridient[]): void{
            this.shoppingListService.addIngridients(ingridients);
        }

}
