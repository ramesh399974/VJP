import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessVerificationComponent } from './process-verification.component';

describe('ProcessVerificationComponent', () => {
  let component: ProcessVerificationComponent;
  let fixture: ComponentFixture<ProcessVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
