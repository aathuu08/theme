import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCartComponent } from './theme-cart.component';

describe('ThemeCartComponent', () => {
  let component: ThemeCartComponent;
  let fixture: ComponentFixture<ThemeCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeCartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
