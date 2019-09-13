import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingContainerComponent } from './shipping-container.component';

describe('ShippingContainerComponent', () => {
  let component: ShippingContainerComponent;
  let fixture: ComponentFixture<ShippingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
