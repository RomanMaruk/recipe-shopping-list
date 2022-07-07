import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() indigrient = new EventEmitter<IngridientsInterface>();
  @ViewChild('f') slForm!: NgForm;

  unsubscribing!: Subscription;
  editedItemIndex!: number;
  edditItem!: IngridientsInterface;

  editMode = false;

  constructor(private shListService: ShoppingListService) { }
  add: any
  ngOnInit(): void {
    this.unsubscribing = this.shListService.indexIndigrient
      .subscribe(index => {
        this.editedItemIndex = index
        this.editMode = true
        this.edditItem = this.shListService.getEdditItem(index);
        this.slForm.setValue({
          name: this.edditItem.name,
          amount: this.edditItem.amount,
        })
      })
  }

  ngOnDestroy(): void {
    this.unsubscribing.unsubscribe()
  }

  onAdd(obj: NgForm) {
    if (this.editMode) {
      this.shListService.editIndigrient(this.editedItemIndex, obj.value)
      this.editMode = false
    } else {
      this.shListService.addIndigrient(obj.value)
    }
    obj.reset()
  }

  onClear() {
    this.slForm.reset()
    this.editMode = false
  }

  removeIngredient() {
    this.shListService.removeIngredient(this.editedItemIndex)
    this.onClear()
  }

}
