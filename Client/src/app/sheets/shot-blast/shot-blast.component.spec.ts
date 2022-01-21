import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotBlastComponent } from './shot-blast.component';

describe('ShotBlastComponent', () => {
  let component: ShotBlastComponent;
  let fixture: ComponentFixture<ShotBlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotBlastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
