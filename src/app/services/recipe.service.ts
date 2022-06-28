import { RecipeInterface } from "../models/recipe.interface";
export class RecipeService {

  private recipes: RecipeInterface[] = [
    {
      name: 'Meat',
      description: 'Some test description',
      imagePath:
        'https://panlasangpinoy.com/wp-content/uploads/2021/09/Beef-Salpicao-500x500.jpg',
      indigrients: [
        { name: "Meat", amount: 0.5 },
        { name: "Salat", amount: 200 },
        { name: "Bread", amount: 2 },
      ]
    },
    {
      name: 'Eggs',
      description: 'Roman learning some angular feature',
      imagePath:
        'https://www.thespruceeats.com/thmb/KlxVlTh-6J98IOycocC3TrRUu04=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-eggs-in-a-basket-recipe-2097253-hero-07-43091f4f839c4a76aa83ac0e94910267.jpg',
      indigrients: [
        { name: 'Chise', amount: 100 },
        { name: 'Eggs', amount: 3 },
        { name: 'Sausages', amount: 4 },
        { name: 'Oil', amount: 100 },
      ]
    },
  ];

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number): RecipeInterface {
    return this.recipes[index]
  }

}
