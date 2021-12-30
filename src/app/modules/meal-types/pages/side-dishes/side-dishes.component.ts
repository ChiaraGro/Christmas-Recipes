import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-side-dishes',
  templateUrl: './side-dishes.component.html',
  styleUrls: ['./side-dishes.component.scss']
})
export class SideDishesComponent implements OnInit {

  recipes$!: Observable<Recipe[]>;
  
  constructor(
    private readonly recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.searchRandom('')
  }

  search(text: string){
    this.recipes$ = this.recipeService.search(text,'complexSearch','side dish')
  }
  searchRandom(text: string){
    this.recipes$ = this.recipeService.search(text,'random','side dish')
  }
}
