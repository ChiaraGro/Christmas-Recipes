import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {

  recipes$!: Observable<Recipe[]>;

  constructor(
    private readonly recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.searchRandom('')
  }

  search(text: string){
    this.recipes$ = this.recipeService.search(text,'complexSearch','desserts')
  }
  searchRandom(text: string){
    this.recipes$ = this.recipeService.search(text,'random','desserts')
  }
}
