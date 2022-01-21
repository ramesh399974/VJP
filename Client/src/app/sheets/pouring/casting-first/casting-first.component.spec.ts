import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingFirstComponent } from './casting-first.component';

describe('CastingFirstComponent', () => {
  let component: CastingFirstComponent;
  let fixture: ComponentFixture<CastingFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastingFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastingFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
