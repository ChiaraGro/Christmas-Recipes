import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRecipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Output() selectRecipe = new EventEmitter<number>();
  @Input() recipe!: IRecipe;

  public imgLoading: boolean = true
  
  constructor() { }
  
  onLoad() {
        this.imgLoading = false;
    }

  ngOnInit(): void {
  }

}
