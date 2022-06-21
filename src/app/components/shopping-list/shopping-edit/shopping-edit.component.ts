import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() indigrient = new EventEmitter<IngridientsInterface>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(obj: IngridientsInterface) {
    this.indigrient.emit(obj)
  }

}
