import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicCalibrationReportComponent } from './periodic-calibration-report.component';

describe('PeriodicCalibrationReportComponent', () => {
  let component: PeriodicCalibrationReportComponent;
  let fixture: ComponentFixture<PeriodicCalibrationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicCalibrationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicCalibrationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
