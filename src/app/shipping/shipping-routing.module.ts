import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingContainerComponent } from './shipping-container/shipping-container.component';

const routes: Routes = [{ path: '', component: ShippingContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule {}
