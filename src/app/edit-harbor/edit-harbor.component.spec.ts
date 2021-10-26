import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHarborComponent } from './edit-harbor.component';

describe('EditHarborComponent', () => {
  let component: EditHarborComponent;
  let fixture: ComponentFixture<EditHarborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHarborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHarborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
