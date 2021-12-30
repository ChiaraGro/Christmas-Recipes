import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeatTypesContainerComponent } from './modules/meal-types/components/meat-types-container/meat-types-container.component';
import { DessertsComponent } from './modules/meal-types/pages/desserts/desserts.component';
import { MainCoursesComponent } from './modules/meal-types/pages/main-courses/main-courses.component';
import { SideDishesComponent } from './modules/meal-types/pages/side-dishes/side-dishes.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'meals',
    loadChildren: () => import('./modules/meal-types/meal-types.module').then(m => m.MealTypesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
