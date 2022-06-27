import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { IngridientsInterface } from 'src/app/models/shopingList.interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeDetail!: RecipeInterface;
  recipeDetail!: RecipeInterface;

  constructor(
    private shListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipesService: RecipeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetail = this.recipesService.getRecipe(+params['id'])
    });
  }

  addSList(indigrient: IngridientsInterface[]) {
    indigrient.forEach((item) => {
      this.shListService.addIndigrient(item);
    });
  }
}
