import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[] = [];
    recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');

    @Output() recipeSelected = new EventEmitter<Recipe>();

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
