import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: RecipeInterface;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
