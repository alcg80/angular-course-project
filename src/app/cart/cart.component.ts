import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService, 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required)
    });
  }

  onSubmit({name, address}) {
    if(this.checkoutForm.valid) {
      // Procesar envío a servidor externo
      console.log('Your order has been submitted', name, address);

      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    }
  }

  get name() {
    return this.checkoutForm.get('name');
  }

  get address() {
    return this.checkoutForm.get('address');
  }

}