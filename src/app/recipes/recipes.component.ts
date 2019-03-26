import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from `../mock-recipes`;

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = RECIPES;

  selectedRecipe: Recipe;
  // ingredients = selectedRecipe.ingredients;
  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  removeRecipe(recipe: Recipe) {
    RECIPES.splice(recipe.id - 11, 1);
    for (let i = recipe.id - 11; i < RECIPES.length; i++) {
      RECIPES[i].id--;
    }
  }
}
