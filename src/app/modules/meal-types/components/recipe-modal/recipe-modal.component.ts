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
  @Input() recipeDetails$?: Observable<RecipeDetails | undefined>;
  @Input() modalSkeletonLoader = false;

  public showSummary = false;

  public imgLoading: boolean = true
  
  constructor() { }
  
  onLoad() {
      this.imgLoading = false;
  }
  
  ngOnInit(): void {
  }

}
