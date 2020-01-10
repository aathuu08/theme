import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCheckoutComponent } from './theme-checkout.component';

describe('ThemeCheckoutComponent', () => {
  let component: ThemeCheckoutComponent;
  let fixture: ComponentFixture<ThemeCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeCheckoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
