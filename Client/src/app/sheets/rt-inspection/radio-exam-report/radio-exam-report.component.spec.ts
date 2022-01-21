import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioExamReportComponent } from './radio-exam-report.component';

describe('RadioExamReportComponent', () => {
  let component: RadioExamReportComponent;
  let fixture: ComponentFixture<RadioExamReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioExamReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioExamReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
