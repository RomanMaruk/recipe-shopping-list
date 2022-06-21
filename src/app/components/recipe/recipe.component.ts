import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipeDetail!: RecipeInterface;

  constructor() { }

  ngOnInit(): void {
  }

  setRecipeDetail(obj: RecipeInterface) {
    this.recipeDetail = {
      description: obj.description,
      imagePath: obj.imagePath,
      name: obj.name
    }
  }

}
