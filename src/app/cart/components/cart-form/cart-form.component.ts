import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<any>();

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required)
    });
  }

  onSubmitForm() {
    if (this.checkoutForm.valid) {
      this.submitForm.emit(this.checkoutForm.value);
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
