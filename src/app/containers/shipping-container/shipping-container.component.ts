import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping-container',
  templateUrl: './shipping-container.component.html',
  styleUrls: ['./shipping-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingContainerComponent implements OnInit {
  shippingCosts$: Observable<object>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts$ = this.cartService.getShippingPrices();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
