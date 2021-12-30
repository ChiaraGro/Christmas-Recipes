import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealTypesRoutingModule } from './meal-types-routing.module';
import { MainCoursesComponent } from './pages/main-courses/main-courses.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { SideDishesComponent } from './pages/side-dishes/side-dishes.component';
import { MeatTypesContainerComponent } from './components/meat-types-container/meat-types-container.component';
import { SearchComponent } from './components/search/search.component';
import { RecipesComponent } from './components/recipes/recipes.component';


@NgModule({
  declarations: [
    MainCoursesComponent,
    DessertsComponent,
    SideDishesComponent,
    MeatTypesContainerComponent,
    SearchComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    MealTypesRoutingModule
  ]
})
export class MealTypesModule { }
