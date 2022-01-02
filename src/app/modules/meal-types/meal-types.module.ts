import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealTypesRoutingModule } from './meal-types-routing.module';
import { SearchContainerComponent } from './pages/search-container/search-container.component';
import { MeatTypesContainerComponent } from './components/meat-types-container/meat-types-container.component';
import { SearchComponent } from './components/search/search.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';


@NgModule({
  declarations: [
    SearchContainerComponent,
    MeatTypesContainerComponent,
    SearchComponent,
    RecipesComponent,
    RecipeModalComponent
  ],
  imports: [
    CommonModule,
    MealTypesRoutingModule,
    ReactiveFormsModule
  ]
})
export class MealTypesModule { }
