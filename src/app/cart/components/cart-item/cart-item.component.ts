import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() item: Product;

  constructor() {}

  ngOnInit() {}
}
