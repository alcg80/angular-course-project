import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailContainerComponent } from './product-detail-container/product-detail-container.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductAlertsComponent,
    ProductDetailContainerComponent,
    ProductComponent,
    ProductItemComponent,
    ProductsContainerComponent
  ],
  imports: [SharedModule, ProductsRoutingModule]
})
export class ProductsModule {}
