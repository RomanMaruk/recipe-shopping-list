import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail!: RecipeInterface;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
