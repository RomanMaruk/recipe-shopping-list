import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ɵɵsetComponentScope } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  recipeSelected!: RecipeInterface;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: RecipeInterface) => {
      this.recipeSelected = recipe
    })
  }

}
