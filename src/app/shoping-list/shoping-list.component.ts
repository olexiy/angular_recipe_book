import { Component, OnInit } from '@angular/core';
import { Ingridient} from '../shared/ingridient.model';
import {ShoppingListService} from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingridients: Ingridient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
      this.ingridients = this.shoppingListService.getIngridients();
      this.shoppingListService.ingridientsChanged.subscribe((ingridients: Ingridient[]) => {
        this.ingridients = ingridients;
      });
  }

}
