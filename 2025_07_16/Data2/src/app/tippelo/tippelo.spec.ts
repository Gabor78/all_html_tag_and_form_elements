import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tippelo } from './tippelo';

describe('Tippelo', () => {
  let component: Tippelo;
  let fixture: ComponentFixture<Tippelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tippelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tippelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
