import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asincrona20Component } from './asincrona20.component';

describe('Asincrona20Component', () => {
  let component: Asincrona20Component;
  let fixture: ComponentFixture<Asincrona20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asincrona20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asincrona20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
