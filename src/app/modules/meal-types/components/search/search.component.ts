import { Component, EventEmitter, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { FormBuilder, FormControl, Validators } from '@angular/forms';

>>>>>>> 92a001ceaa7e156d797f49941674226f6f3660e3

export interface SearchForm {
  text: string;
  intolerances?: string[];
  cuisines?: string[];
  vegan?: boolean;
  vegetarian?: boolean
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<SearchForm>();

  _cuisines = ['African','American','British','Cajun','Caribbean','Chinese','Eastern European','European','French','German','Greek','Indian','Irish','Italian','Japanese','Jewish','Korean','Latin American','Mediterranean','Mexican','Middle Eastern','Nordic','Southern','Spanish','Thai','Vietnamese'];
  _intolerances = ['Dairy','Egg','Gluten','Grain','Peanut','Seafood','Sesame','Shellfish','Soy','Sulfite','Tree Nut','Wheat'];

  searchText = new FormControl('', [Validators.required])
  intoleranceGroup = this.formBuilder.group({...this.buildFilters(this._intolerances)})
  cuisinesGroup = this.formBuilder.group({...this.buildFilters(this._cuisines)})
  vegan = new FormControl(false);
  vegetarian = new FormControl(false);


  constructor(
    private formBuilder: FormBuilder
  ) { }

  find(){

    this.searchText.valid && this.onSearch.emit({
      text: this.searchText.value,
      intolerances: [...Object.entries(this.intoleranceGroup.value).filter(el => el[1] == true).map(el => el[0])],
      cuisines: [...Object.entries(this.cuisinesGroup.value).filter(el => el[1] == true).map(el => el[0])],
      vegan: this.vegan.value,
      vegetarian: this.vegetarian.value
    })

  }

  buildFilters(filter: string[]){
    const formGroup: { [key:string]:boolean } = {};
    filter.forEach(int => {
      formGroup[int] = false
    })
    return formGroup

  }

  ngOnInit(): void {
  }

}
