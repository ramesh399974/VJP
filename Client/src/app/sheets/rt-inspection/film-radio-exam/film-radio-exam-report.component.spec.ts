import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmRadioExamReportComponent } from './film-radio-exam-report.component';

describe('FilmRadioExamReportComponent', () => {
  let component: FilmRadioExamReportComponent;
  let fixture: ComponentFixture<FilmRadioExamReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmRadioExamReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmRadioExamReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
