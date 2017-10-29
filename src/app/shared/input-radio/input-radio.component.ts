import { Component, OnInit, Input } from '@angular/core';
import { InputRadio } from 'app/shared/input-radio/inputRadio';

@Component({
  selector: 'mt-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {
  @Input() options: InputRadio[];
  value: any;
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
  }

}
