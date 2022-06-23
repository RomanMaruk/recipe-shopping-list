import { Component, OnChanges, OnInit, SimpleChanges, ɵɵsetComponentScope } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit, OnChanges {
  recipeDetail!: RecipeInterface;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.recipeDetail = this.recipeService.recipeDetail
    console.log('Onchanges Recipe', this.recipeDetail)
  }

  // setRecipeDetail(obj: RecipeInterface) {
  //   this.recipeDetail = {
  //     description: obj.description,
  //     imagePath: obj.imagePath,
  //     name: obj.name
  //   }
  // }

}
