import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Sushi Platter',
      'A sushi platter recipe',
      'https://www.foodrepublic.com/img/gallery/the-20-wildest-weirdest-and-most-delicious-recipes-of-the-year/intro-1684945452.jpg',
      [new Ingredient('Salmon', 1), new Ingredient('Sushi Rice', 20)]
    ),
    new Recipe(
      'Yummy rice bowl',
      'A yummi rice bowl recipe',
      'https://www.worldhistory.org/img/r/p/1000x1200/6759.jpg.webp?v=1691431569',
      [new Ingredient('Sushi Rice', 20), new Ingredient('Meat', 1)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
