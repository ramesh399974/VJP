import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtLogbookReportComponent } from './rt-logbook-report.component';

describe('RtLogbookReportComponent', () => {
  let component: RtLogbookReportComponent;
  let fixture: ComponentFixture<RtLogbookReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtLogbookReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtLogbookReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
