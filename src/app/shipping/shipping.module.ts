import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingContainerComponent } from './shipping-container/shipping-container.component';
import { ShippingItemComponent } from './components/shipping-item/shipping-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShippingContainerComponent, ShippingItemComponent],
  imports: [SharedModule, ShippingRoutingModule]
})
export class ShippingModule {}
