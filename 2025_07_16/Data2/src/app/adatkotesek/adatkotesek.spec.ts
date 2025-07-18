import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adatkotesek } from './adatkotesek';

describe('Adatkotesek', () => {
  let component: Adatkotesek;
  let fixture: ComponentFixture<Adatkotesek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adatkotesek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adatkotesek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
