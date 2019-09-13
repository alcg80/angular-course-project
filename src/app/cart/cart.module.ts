import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartContainerComponent, CartFormComponent, CartItemComponent],
  imports: [CommonModule, CartRoutingModule, ReactiveFormsModule]
})
export class CartModule {}
