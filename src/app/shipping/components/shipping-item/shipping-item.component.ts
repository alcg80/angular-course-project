import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shipping-item',
  templateUrl: './shipping-item.component.html',
  styleUrls: ['./shipping-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingItemComponent implements OnInit {
  @Input() shipping: any;

  constructor() {}

  ngOnInit() {}
}
