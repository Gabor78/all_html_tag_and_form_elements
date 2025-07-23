import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrszagStatisztika } from './orszag-statisztika';

describe('OrszagStatisztika', () => {
  let component: OrszagStatisztika;
  let fixture: ComponentFixture<OrszagStatisztika>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrszagStatisztika]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrszagStatisztika);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
