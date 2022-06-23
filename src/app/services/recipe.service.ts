import { EventEmitter } from "@angular/core";
import { RecipeInterface } from "../models/recipe.interface";

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeInterface>();

  private recipes: RecipeInterface[] = [
    {
      name: 'Test',
      description: 'Some test description',
      imagePath:
        'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
    },
    {
      name: 'Test 1',
      description: 'Roman learning some angular feature',
      imagePath:
        'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
    },
  ];

  getRecipes() {
    return this.recipes.slice()
  }

}
