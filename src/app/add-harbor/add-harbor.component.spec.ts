import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHarborComponent } from './add-harbor.component';

describe('AddHarborComponent', () => {
  let component: AddHarborComponent;
  let fixture: ComponentFixture<AddHarborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHarborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHarborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
