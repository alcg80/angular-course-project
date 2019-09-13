import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingContainerComponent } from './shipping-container/shipping-container.component';
import { ShippingItemComponent } from './components/shipping-item/shipping-item.component';

@NgModule({
  declarations: [ShippingContainerComponent, ShippingItemComponent],
  imports: [CommonModule, ShippingRoutingModule]
})
export class ShippingModule {}
