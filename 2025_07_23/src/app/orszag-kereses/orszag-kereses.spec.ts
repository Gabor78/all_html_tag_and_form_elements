import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrszagKereses } from './orszag-kereses';

describe('OrszagKereses', () => {
  let component: OrszagKereses;
  let fixture: ComponentFixture<OrszagKereses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrszagKereses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrszagKereses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
