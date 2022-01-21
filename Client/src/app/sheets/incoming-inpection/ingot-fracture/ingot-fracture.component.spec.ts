import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngotFractureComponent } from './ingot-fracture.component';

describe('IngotFractureComponent', () => {
  let component: IngotFractureComponent;
  let fixture: ComponentFixture<IngotFractureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngotFractureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngotFractureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
