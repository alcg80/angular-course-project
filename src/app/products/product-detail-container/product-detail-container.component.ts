import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-product-detail-container',
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailContainerComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId: number = +params.productId;
      this.product = products.find(product => product.id === productId);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
