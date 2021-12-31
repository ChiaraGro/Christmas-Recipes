import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeatTypesContainerComponent } from './components/meat-types-container/meat-types-container.component';
import { SearchContainerComponent } from './pages/search-container/search-container.component';

const routes: Routes = [
  {
    path: '',
    component: MeatTypesContainerComponent,
    children: [
      {
        path: ':mealType',
        component: SearchContainerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealTypesRoutingModule { }
