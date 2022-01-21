import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalTreatmentComponent } from './metal-treatment.component';

describe('MetalTreatmentComponent', () => {
  let component: MetalTreatmentComponent;
  let fixture: ComponentFixture<MetalTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
