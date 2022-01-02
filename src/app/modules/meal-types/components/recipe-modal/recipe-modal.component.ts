import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDetails } from 'src/app/shared/models/recipeDetail.model';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.scss']
})
export class RecipeModalComponent implements OnInit {
  
  @Output() closeModal = new EventEmitter();
  @Input() recipeDetails$?: Observable<RecipeDetails>;

  constructor() { }

  ngOnInit(): void {
  }

}
