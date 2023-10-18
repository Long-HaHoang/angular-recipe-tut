import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService implements OnInit {
  ingriedientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  constructor() {}

  ngOnInit(): void {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingriedientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // too many events
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // using the spread operator instead, too save event fire
    this.ingredients.push(...ingredients);
    this.ingriedientsChanged.emit(this.ingredients.slice());
  }
}
