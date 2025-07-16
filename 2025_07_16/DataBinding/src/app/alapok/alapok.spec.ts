import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alapok } from './alapok';

describe('Alapok', () => {
  let component: Alapok;
  let fixture: ComponentFixture<Alapok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alapok]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alapok);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
