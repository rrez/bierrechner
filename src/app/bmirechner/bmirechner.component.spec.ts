import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmirechnerComponent } from './bmirechner.component';

describe('BmirechnerComponent', () => {
  let component: BmirechnerComponent;
  let fixture: ComponentFixture<BmirechnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmirechnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmirechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
