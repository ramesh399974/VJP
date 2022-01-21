import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieStartupComponent } from './die-startup.component';

describe('DieStartupComponent', () => {
  let component: DieStartupComponent;
  let fixture: ComponentFixture<DieStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
