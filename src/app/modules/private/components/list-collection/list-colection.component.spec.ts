import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColectionComponent } from './list-colection.component';

describe('ListColectionComponent', () => {
  let component: ListColectionComponent;
  let fixture: ComponentFixture<ListColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
