import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolInspectionComponent } from './patrol-inspection.component';

describe('PatrolInspectionComponent', () => {
  let component: PatrolInspectionComponent;
  let fixture: ComponentFixture<PatrolInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrolInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
