import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardInspectionComponent } from './inward-inspection.component';

describe('InwardInspectionComponent', () => {
  let component: InwardInspectionComponent;
  let fixture: ComponentFixture<InwardInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
