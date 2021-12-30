import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();

  searchText = new FormControl('', Validators.required);

  constructor() { }

  search(){
    this.searchText.valid && this.onSearch.emit(this.searchText.value)
  }

  ngOnInit(): void {
  }

}
