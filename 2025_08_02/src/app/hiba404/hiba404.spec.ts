import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hiba404 } from './hiba404';

describe('Hiba404', () => {
  let component: Hiba404;
  let fixture: ComponentFixture<Hiba404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hiba404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hiba404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
