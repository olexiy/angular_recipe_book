import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  ngOnInit(): void {
  }

}
