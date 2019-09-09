import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';
import { ProductDetailContainerComponent } from './containers/product-detail-container/product-detail-container.component';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { ShippingContainerComponent } from './containers/shipping-container/shipping-container.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ShippingItemComponent } from './components/shipping-item/shipping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsContainerComponent,
    ProductDetailContainerComponent,
    CartContainerComponent,
    ShippingContainerComponent,
    CartItemComponent,
    CartFormComponent,
    ProductComponent,
    ProductItemComponent,
    ProductAlertsComponent,
    ShippingItemComponent
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
