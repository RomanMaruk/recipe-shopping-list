import { RecipeInterface } from "../models/recipe.interface";

export class RecipeService {
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

  recipeDetail!: RecipeInterface;

  getRecipes() {
    return this.recipes.slice()
  }

  onRecipeItem(item: RecipeInterface) {
    this.recipeDetail = item
    console.log('Services ', this.recipeDetail)
  }
}
