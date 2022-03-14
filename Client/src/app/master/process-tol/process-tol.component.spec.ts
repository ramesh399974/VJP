import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTolComponent } from './process-tol.component';

describe('ProcessTolComponent', () => {
  let component: ProcessTolComponent;
  let fixture: ComponentFixture<ProcessTolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessTolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
