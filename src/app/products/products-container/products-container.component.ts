import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsContainerComponent implements OnInit {
  products: Product[] = products;

  constructor() {}

  ngOnInit() {}

  share({ name }) {
    window.alert(`The product ${name} has been shared!`);
  }

  onProductNotify({ name }) {
    window.alert(`You will be notified when the product ${name} goes on sale`);
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
