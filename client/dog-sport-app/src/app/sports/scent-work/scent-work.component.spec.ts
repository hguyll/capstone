import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScentWorkComponent } from './scent-work.component';

describe('ScentWorkComponent', () => {
  let component: ScentWorkComponent;
  let fixture: ComponentFixture<ScentWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScentWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
