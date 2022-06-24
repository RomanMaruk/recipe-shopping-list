import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() indigrient = new EventEmitter<IngridientsInterface>();

  constructor(private shListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(obj: IngridientsInterface) {
    this.shListService.addIndigrient(obj)
  }

}
