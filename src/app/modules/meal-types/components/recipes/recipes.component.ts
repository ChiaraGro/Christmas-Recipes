import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicRecipe, IRecipe, Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @Output() selectRecipe = new EventEmitter<number>();
  @Input() recipes$!: Observable<IRecipe[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
