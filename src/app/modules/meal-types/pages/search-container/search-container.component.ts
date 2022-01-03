import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { onOpen } from 'src/app/shared/models/animations/toggle.animation';
import { IRecipe} from 'src/app/shared/models/recipe.model';
import { RecipeDetails } from 'src/app/shared/models/recipeDetail.model';
import { SearchForm } from '../../components/search/search.component';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
  animations: [ onOpen ]
})
export class SearchContainerComponent implements OnInit {

  mealType!: string;
  recipes$!: Observable<IRecipe[]>;
  currentRecipe$?: Observable<RecipeDetails>;
  modalSkeletonLoader = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    
    this.route.params
    .subscribe(params => {
      this.mealType = params.mealType;
      this.search({text: ''})
    })
  }

  search(form: SearchForm){
    this.recipes$ = this.recipeService.search(form,'complexSearch', this.mealType)
  }

  // search(form: SearchForm){
  //   console.log(form)
  // }
  getRecipeById(id: number){
    this.modalSkeletonLoader = true;
    this.currentRecipe$ = this.recipeService.getRecipeById(id)
  }

  closeModal(){
    
    this.currentRecipe$ = undefined;
    this.modalSkeletonLoader = false
  }

}
