import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeItem = new EventEmitter<RecipeInterface>();

  recipes: RecipeInterface[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
    console.log(this.recipeService.getRecipes())
  }

  takeItem(item: RecipeInterface) {
    this.recipeService.onRecipeItem(item)
  }
}
