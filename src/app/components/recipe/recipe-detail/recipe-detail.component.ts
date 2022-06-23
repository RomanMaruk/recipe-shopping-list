import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  // @Input() recipeDetail!: RecipeInterface;
  recipeDetail!: RecipeInterface;

  constructor(private recipeService: RecipeService) { }

  ngOnChanges(recipeDetail: SimpleChanges): void {
    console.log('Detail', recipeDetail)
    this.recipeDetail = this.recipeService.recipeDetail
  }

  ngOnInit(): void {
    console.log('Detail')
  }

}
