import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-item',
  templateUrl: './shipping-item.component.html',
  styleUrls: ['./shipping-item.component.scss']
})
export class ShippingItemComponent implements OnInit {
  @Input() shipping: any;

  constructor() {}

  ngOnInit() {}
}
