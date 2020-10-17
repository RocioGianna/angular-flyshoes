import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyshoesShoesComponent } from './flyshoes-shoes.component';

describe('FlyshoesShoesComponent', () => {
  let component: FlyshoesShoesComponent;
  let fixture: ComponentFixture<FlyshoesShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyshoesShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyshoesShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
