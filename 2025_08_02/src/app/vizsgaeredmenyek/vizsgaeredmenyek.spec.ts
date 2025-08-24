import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vizsgaeredmenyek } from './vizsgaeredmenyek';

describe('Vizsgaeredmenyek', () => {
  let component: Vizsgaeredmenyek;
  let fixture: ComponentFixture<Vizsgaeredmenyek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vizsgaeredmenyek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vizsgaeredmenyek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
