import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtolsoCsatlakozas } from './utolso-csatlakozas';

describe('UtolsoCsatlakozas', () => {
  let component: UtolsoCsatlakozas;
  let fixture: ComponentFixture<UtolsoCsatlakozas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtolsoCsatlakozas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtolsoCsatlakozas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
