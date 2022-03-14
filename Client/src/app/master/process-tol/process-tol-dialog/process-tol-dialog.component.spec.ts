import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTolDialogComponent } from './process-tol-dialog.component';

describe('ProcessTolDialogComponent', () => {
  let component: ProcessTolDialogComponent;
  let fixture: ComponentFixture<ProcessTolDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessTolDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
