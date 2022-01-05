import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { onLoad } from 'src/app/shared/models/animations/toggle.animation';
import { IRecipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  animations: [ onLoad ]
})
export class RecipesComponent implements OnInit {
  @Output() selectRecipe = new EventEmitter<number>();
  @Input() recipes$?: Observable<IRecipe[] | undefined>;
  @Input() mealType!: string;

  @Input() skeletonLoader = false;

  constructor() { }

  ngOnInit(): void {
  }

}
