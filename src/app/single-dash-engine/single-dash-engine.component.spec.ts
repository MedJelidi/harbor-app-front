import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDashEngineComponent } from './single-dash-engine.component';

describe('SingleDashEngineComponent', () => {
  let component: SingleDashEngineComponent;
  let fixture: ComponentFixture<SingleDashEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDashEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDashEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
