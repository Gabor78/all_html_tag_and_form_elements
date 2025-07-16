import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elmelet } from './elmelet';

describe('Elmelet', () => {
  let component: Elmelet;
  let fixture: ComponentFixture<Elmelet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Elmelet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elmelet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
