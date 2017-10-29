import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/shared/shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppinCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppinCartService.items;
  }

  total(): number {
    return this.shoppinCartService.total();
  }

  clear() {
    this.shoppinCartService.clear()
  }

  removeItem(item) {
    this.shoppinCartService.removeItem(item);
  }

  addItem(item){
    this.shoppinCartService.addItem(item);
  }
}
