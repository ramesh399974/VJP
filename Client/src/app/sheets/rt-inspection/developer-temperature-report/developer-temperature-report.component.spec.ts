import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTemperatureReportComponent } from './developer-temperature-report.component';

describe('DeveloperTemperatureReportComponent', () => {
  let component: DeveloperTemperatureReportComponent;
  let fixture: ComponentFixture<DeveloperTemperatureReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperTemperatureReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperTemperatureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
