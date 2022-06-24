import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: IngridientsInterface[];

  constructor(private shListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shListService.getShoppingList();
    this.shListService.indigredientChange
      .subscribe((indigrients: IngridientsInterface[]) => {
        this.ingredients = indigrients
      })
  }

}
