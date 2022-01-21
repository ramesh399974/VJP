import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingFinalInspectionComponent } from './casting-final-inspection.component';

describe('CastingFinalInspectionComponent', () => {
  let component: CastingFinalInspectionComponent;
  let fixture: ComponentFixture<CastingFinalInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastingFinalInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastingFinalInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
