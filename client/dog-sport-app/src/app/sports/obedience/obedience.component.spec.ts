import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObedienceComponent } from './obedience.component';

describe('ObedienceComponent', () => {
  let component: ObedienceComponent;
  let fixture: ComponentFixture<ObedienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObedienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObedienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
