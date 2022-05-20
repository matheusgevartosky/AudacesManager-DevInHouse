import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashListComponent } from './dash-list.component';

describe('DashListComponent', () => {
  let component: DashListComponent;
  let fixture: ComponentFixture<DashListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
