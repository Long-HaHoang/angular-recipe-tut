import { Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService implements OnInit {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  constructor() {}

  ngOnInit(): void {}

  getIngredients() {
    return this.ingredients.slice();
  }
}
