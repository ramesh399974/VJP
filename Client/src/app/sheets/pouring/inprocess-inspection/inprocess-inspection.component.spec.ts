import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocessInspectionComponent } from './inprocess-inspection.component';

describe('InprocessInspectionComponent', () => {
  let component: InprocessInspectionComponent;
  let fixture: ComponentFixture<InprocessInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprocessInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprocessInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
