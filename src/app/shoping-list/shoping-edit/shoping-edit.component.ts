import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import {ShoppingListService} from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngridient = new Ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngridient(newIngridient);
  }
}
