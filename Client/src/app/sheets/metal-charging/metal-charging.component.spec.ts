import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalChargingComponent } from './metal-charging.component';

describe('MetalChargingComponent', () => {
  let component: MetalChargingComponent;
  let fixture: ComponentFixture<MetalChargingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalChargingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
