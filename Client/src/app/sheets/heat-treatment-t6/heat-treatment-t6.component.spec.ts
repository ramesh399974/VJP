import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatTreatmentT6Component } from './heat-treatment-t6.component';

describe('HeatTreatmentT6Component', () => {
  let component: HeatTreatmentT6Component;
  let fixture: ComponentFixture<HeatTreatmentT6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatTreatmentT6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatTreatmentT6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
