import { Component, OnInit } from '@angular/core';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngridientsInterface[] = [
    { name: 'Appeles', amount: 3 },
    { name: 'Tomatoes', amount: 5 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIndigrient(indigrient: IngridientsInterface) {
    this.ingredients.unshift(indigrient)
  }

}
