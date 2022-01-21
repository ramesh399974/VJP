import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtTrainingReportComponent } from './rt-training-report.component';

describe('RtTrainingReportComponent', () => {
  let component: RtTrainingReportComponent;
  let fixture: ComponentFixture<RtTrainingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtTrainingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtTrainingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
