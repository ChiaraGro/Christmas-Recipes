import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealTypesRoutingModule } from './meal-types-routing.module';
import { SearchContainerComponent } from './pages/search-container/search-container.component';
import { MeatTypesContainerComponent } from './components/meat-types-container/meat-types-container.component';
import { SearchComponent } from './components/search/search.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { StoreModule } from '@ngrx/store';
import { recipesReducer } from './store/recipes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { recipesEffects } from './store/recipes.effects';


@NgModule({
  declarations: [
    SearchContainerComponent,
    MeatTypesContainerComponent,
    SearchComponent,
    RecipesComponent,
    RecipeModalComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    MealTypesRoutingModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    StoreModule.forFeature('recipes', recipesReducer),
    EffectsModule.forFeature([recipesEffects]),
    
  ]
})
export class MealTypesModule { }
