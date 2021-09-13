import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockDivingComponent } from './dock-diving.component';

describe('DockDivingComponent', () => {
  let component: DockDivingComponent;
  let fixture: ComponentFixture<DockDivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockDivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockDivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
