import { Component } from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {
    recipeSelected: Recipe;
}
