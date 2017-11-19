import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/shared/shopping-cart.service';
import { state, trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('500ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
        style({ opacity: 0.7, transform: 'translateX(10px)', offset: 0.7 }),
        style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
      ]))),
      transition('ready => void', animate('500ms 0s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
        style({ opacity: 0.7, transform: 'translateX(-10px)', offset: 0.2 }),
        style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
      ]))),
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready';

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

  addItem(item) {
    this.shoppinCartService.addItem(item);
  }
}
