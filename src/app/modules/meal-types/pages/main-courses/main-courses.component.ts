import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-main-courses',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.scss']
})
export class MainCoursesComponent implements OnInit {

  recipes$!: Observable<Recipe[]>;
  
  constructor(
    private readonly recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.searchRandom('')
  }
  search(text: string){
    this.recipes$ = this.recipeService.search(text,'complexSearch','main course')
  }
  searchRandom(text: string){
    this.recipes$ = this.recipeService.search(text,'random','main course')
  }
}
