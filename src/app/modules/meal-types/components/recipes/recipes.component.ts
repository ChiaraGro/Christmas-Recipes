import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input() recipes$!: Observable<Recipe[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
