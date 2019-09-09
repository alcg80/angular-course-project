import { Component } from '@angular/core';

import { Product } from '../models/product.model';
import { products } from '../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = products;

  share(productName: string) {
    window.alert(`The product ${productName} has been shared!`);
  }
  
  onProductNotify(product: Product) {
    window.alert(
      `You will be notified when the product ${product.name} goes on sale`
    );
  }
}