import { Injectable } from '@angular/core';
import { CartItem } from 'app/shared/cart-item.model';
import { NotificationService } from 'app/shared/notification.service';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];
  constructor(private notificationService: NotificationService) { }


  clear() {
    this.items = [];
  }

  addItem(item: any) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.name}`);

  }

  total(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
  }
}
