import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { onOpen } from 'src/app/shared/models/animations/toggle.animation';
import { IRecipe} from 'src/app/shared/models/recipe.model';
import { RecipeDetails } from 'src/app/shared/models/recipeDetail.model';
import { SearchForm } from '../../components/search/search.component';
import { getRecipeDetail, searchRecipes } from '../../store/recipes.actions';
import { getCurrentRecipe, getSearchError, getSearchResults} from '../../store/recipes.selectors';
import { RecipesState } from '../../store/recipes.state';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
  animations: [ onOpen ]
})
export class SearchContainerComponent implements OnInit {

  public mealType!: string;
  public recipes$?: Observable<IRecipe[] | undefined>;
  public currentRecipe$?: Observable<RecipeDetails | undefined>;
  public searchError$!: Observable<boolean>;
  public modalSkeletonLoader = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<RecipesState>
  ) { }

  
  search(form: SearchForm){
    
    this.store.dispatch(searchRecipes({mealType: this.mealType, search: form}));
    
  }
  
  getRecipeById(id: number){
    
    this.modalSkeletonLoader = true;
    this.store.dispatch(getRecipeDetail({id}))
    this.currentRecipe$ = this.store.select(getCurrentRecipe);
    
  }
  
  closeModal(){
    
    this.currentRecipe$ = undefined;
    this.modalSkeletonLoader = false;
  }
  
  ngOnInit(): void {

    this.recipes$ = this.store.select(getSearchResults);
    this.searchError$ = this.store.select(getSearchError);
    
    this.route.params
      .subscribe(params => {
        this.mealType = params.mealType;
        this.search({text: ''})
    })

  }
}
