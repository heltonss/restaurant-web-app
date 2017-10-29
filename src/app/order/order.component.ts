import { Component, OnInit } from '@angular/core';
import { InputRadio } from 'app/shared/input-radio/inputRadio';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  paymentOptions: InputRadio[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
