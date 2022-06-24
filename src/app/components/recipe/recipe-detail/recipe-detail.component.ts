import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail!: RecipeInterface;

  constructor(private shListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addSList(indigrient: IngridientsInterface[]) {
    indigrient.forEach(item => {
      this.shListService.addIndigrient(item)
    })
  }

}
