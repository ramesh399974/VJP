import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpiInspectionComponent } from './fpi-inspection.component';

describe('FpiInspectionComponent', () => {
  let component: FpiInspectionComponent;
  let fixture: ComponentFixture<FpiInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpiInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpiInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
