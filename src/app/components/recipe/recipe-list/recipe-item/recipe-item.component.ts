import { Component, Input, OnInit } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: RecipeInterface;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {

  }
}
