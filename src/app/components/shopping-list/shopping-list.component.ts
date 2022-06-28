import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: IngridientsInterface[];
  igChangeSub!: Subscription;

  constructor(private shListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shListService.getShoppingList();
    this.igChangeSub = this.shListService.indigredientChange
      .subscribe((indigrients: IngridientsInterface[]) => {
        this.ingredients = indigrients
      })
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }

}
