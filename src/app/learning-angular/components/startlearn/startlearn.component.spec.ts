import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartlearnComponent } from './startlearn.component';

describe('StartlearnComponent', () => {
  let component: StartlearnComponent;
  let fixture: ComponentFixture<StartlearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartlearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
