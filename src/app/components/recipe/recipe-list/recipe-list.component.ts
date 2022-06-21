import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeInterface } from 'src/app/models/recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItem = new EventEmitter<RecipeInterface>();

  recipes: RecipeInterface[] = [
    {
      name: 'Test',
      description: 'Some test description',
      imagePath:
        'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
    },
    {
      name: 'Test 1',
      description: 'Roman learning some angular feature',
      imagePath:
        'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void { }

  takeItem(item: RecipeInterface) {
    this.recipeItem.emit(item)
  }
}
