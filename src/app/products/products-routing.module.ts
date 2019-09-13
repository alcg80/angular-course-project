import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductDetailContainerComponent } from './product-detail-container/product-detail-container.component';
import { ProductGuard } from './guards/product.guard';

const routes: Routes = [
  { path: '', component: ProductsContainerComponent },
  {
    path: ':productId',
    component: ProductDetailContainerComponent,
    canActivate: [ProductGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
