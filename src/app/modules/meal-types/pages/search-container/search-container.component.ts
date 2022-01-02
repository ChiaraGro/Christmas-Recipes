import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BasicRecipe, IRecipe, Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeDetails } from 'src/app/shared/models/recipeDetail.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  mealType!: string;
  recipes$!: Observable<IRecipe[]>;
  currentRecipe$?: Observable<RecipeDetails>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.mealType = params.mealType;
      this.search('')
    })
  
  }

  search(text: string){
    console.log(this.mealType)
    this.recipes$ = this.recipeService.search(text,'complexSearch', this.mealType)
  }

  getRecipeById(id: number){
    this.currentRecipe$ = this.recipeService.getRecipeById(id)
  }

  closeModal(){
    this.currentRecipe$ = undefined
  }

}
