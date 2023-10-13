import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'A test recipe',
      'https://www.foodrepublic.com/img/gallery/the-20-wildest-weirdest-and-most-delicious-recipes-of-the-year/intro-1684945452.jpg'
    ),
    new Recipe(
      'Another Test recipe',
      'Another test recipe',
      'https://www.worldhistory.org/img/r/p/1000x1200/6759.jpg.webp?v=1691431569'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
