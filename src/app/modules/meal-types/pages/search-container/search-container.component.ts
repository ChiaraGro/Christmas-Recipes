import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { onOpen } from 'src/app/shared/models/animations/toggle.animation';
import { IRecipe} from 'src/app/shared/models/recipe.model';
import { RecipeDetails } from 'src/app/shared/models/recipeDetail.model';
import { SearchForm } from '../../components/search/search.component';
import { emptyRecipes, getRecipeDetail, resetRecipeDetail, searchRecipes } from '../../store/recipes.actions';
import { getCurrentRecipe, getSearchResults} from '../../store/recipes.selectors';
import { RecipesState } from '../../store/recipes.state';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
  animations: [ onOpen ]
})
export class SearchContainerComponent implements OnInit {

  mealType!: string;
  recipes$?: Observable<IRecipe[] | undefined>;
  currentRecipe$?: Observable<RecipeDetails | undefined>;
  modalSkeletonLoader = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<RecipesState>
  ) { }

  ngOnInit(): void {
    this.recipes$ = this.store.select(getSearchResults);
    
    this.route.params
      .subscribe(params => {
        this.mealType = params.mealType;
        this.search({text: ''});
      
    });
  }

  search(form: SearchForm){
    this.store.dispatch(emptyRecipes());
    this.store.dispatch(searchRecipes({mealType: this.mealType, search: form}));
    
  }

  getRecipeById(id: number){

    this.modalSkeletonLoader = true;
    this.store.dispatch(getRecipeDetail({id}))
    this.currentRecipe$ = this.store.select(getCurrentRecipe);

  }

  closeModal(){
    
    this.currentRecipe$ = undefined;
    this.store.dispatch(resetRecipeDetail());
    this.modalSkeletonLoader = false;
  }

}
