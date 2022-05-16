import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormColectionComponent } from './form-colection.component';

describe('FormColectionComponent', () => {
  let component: FormColectionComponent;
  let fixture: ComponentFixture<FormColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormColectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
