import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoltenMetalComponent } from './molten-metal.component';

describe('MoltenMetalComponent', () => {
  let component: MoltenMetalComponent;
  let fixture: ComponentFixture<MoltenMetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoltenMetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoltenMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
