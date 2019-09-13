import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartContainerComponent implements OnInit {
  items: Product[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit({ name, address }) {
    // Procesar envío a servidor externo
    console.log('Your order has been submitted', name, address);
    this.items = this.cartService.clearCart();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
