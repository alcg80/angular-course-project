import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingItemComponent } from './shipping-item.component';

describe('ShippingItemComponent', () => {
  let component: ShippingItemComponent;
  let fixture: ComponentFixture<ShippingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
