import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetslearnComponent } from './letslearn.component';

describe('LetslearnComponent', () => {
  let component: LetslearnComponent;
  let fixture: ComponentFixture<LetslearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetslearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetslearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
