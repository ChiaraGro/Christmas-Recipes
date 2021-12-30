import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeatTypesContainerComponent } from './components/meat-types-container/meat-types-container.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { MainCoursesComponent } from './pages/main-courses/main-courses.component';
import { SideDishesComponent } from './pages/side-dishes/side-dishes.component';

const routes: Routes = [
  {
    path: '',
    component: MeatTypesContainerComponent,
    children: [
      {
        path: 'main-courses',
        component: MainCoursesComponent
      },
      {
        path: 'side-dishes',
        component: SideDishesComponent
      },
      {
        path: 'desserts',
        component: DessertsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealTypesRoutingModule { }
