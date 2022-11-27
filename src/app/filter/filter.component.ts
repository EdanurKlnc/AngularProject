import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() all:number= 0;
  @Input() alt:number= 0;
  @Input() ust:number= 0;

//@Input: Parent componentten child componente veri göndermek için kullanılır.
//@Output: Child componentteki bilgiyi parent componente göndermek için kullanılır.



  
  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter <string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    //console.log(this.selectedRadioButtonValue);
  }



}
