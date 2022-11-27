import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Arama yaparak ürün bulma
enteredSerchValue: string ='';

@Output()
searchTextChanged: EventEmitter <string>= new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSerchValue);

}


}
