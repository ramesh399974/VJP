import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRayProcessingReportComponent } from './x-ray-processing-report.component';

describe('XRayProcessingReportComponent', () => {
  let component: XRayProcessingReportComponent;
  let fixture: ComponentFixture<XRayProcessingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRayProcessingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XRayProcessingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
