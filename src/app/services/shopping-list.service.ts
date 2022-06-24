import { EventEmitter } from "@angular/core";
import { IngridientsInterface } from "../models/shopingList.interface";

export class ShoppingListService {
  indigredientChange = new EventEmitter<IngridientsInterface[]>()
  ingredients: IngridientsInterface[] = [
    { name: 'Appeles', amount: 3 },
    { name: 'Tomatoes', amount: 5 }
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIndigrient(item: IngridientsInterface) {
    const findIndex = this.ingredients.findIndex((el) => el.name === item.name)
    if (findIndex === -1) {
      this.ingredients.push(item)
    }
    this.indigredientChange.emit(this.ingredients.slice())
  }
}
