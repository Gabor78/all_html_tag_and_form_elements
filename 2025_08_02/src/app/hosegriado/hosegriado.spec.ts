import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hosegriado } from './hosegriado';

describe('Hosegriado', () => {
  let component: Hosegriado;
  let fixture: ComponentFixture<Hosegriado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hosegriado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hosegriado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
