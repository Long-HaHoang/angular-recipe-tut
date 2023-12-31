import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private slServerSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.slServerSub = this.shoppingListService.ingriedientsChanged.subscribe(
      (ingredientsArray: Ingredient[]) => {
        this.ingredients = ingredientsArray;
      }
    );
  }

  ngOnDestroy(): void {
    this.slServerSub.unsubscribe();
  }
}
