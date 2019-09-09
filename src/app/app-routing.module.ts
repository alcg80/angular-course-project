import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductGuard } from './guards/product.guard';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';
import { ProductDetailContainerComponent } from './containers/product-detail-container/product-detail-container.component';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { ShippingContainerComponent } from './containers/shipping-container/shipping-container.component';

const routes: Routes = [
  { path: '', component: ProductsContainerComponent },
  {
    path: 'products/:productId',
    component: ProductDetailContainerComponent,
    canActivate: [ProductGuard]
  },
  { path: 'cart', component: CartContainerComponent },
  { path: 'shipping', component: ShippingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
