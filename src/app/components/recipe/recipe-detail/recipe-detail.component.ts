import { Component, Input, OnInit } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail!: RecipeInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
