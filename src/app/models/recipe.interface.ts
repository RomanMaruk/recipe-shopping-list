import { IngridientsInterface } from "./shopingList.interface";

export interface RecipeInterface {
  name: string,
  description: string,
  imagePath: string,
  indigrients: IngridientsInterface[]
}
