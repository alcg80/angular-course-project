import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onNotifyClicked() {
    this.notify.emit();
  }
}
