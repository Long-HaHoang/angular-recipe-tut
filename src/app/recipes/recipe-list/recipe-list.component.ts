import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'A test recipe',
      'https://www.foodrepublic.com/img/gallery/the-20-wildest-weirdest-and-most-delicious-recipes-of-the-year/intro-1684945452.jpg'
    ),
    new Recipe(
      'Test recipe',
      'A test recipe',
      'https://www.foodrepublic.com/img/gallery/the-20-wildest-weirdest-and-most-delicious-recipes-of-the-year/intro-1684945452.jpg'
    ),
  ];
}
