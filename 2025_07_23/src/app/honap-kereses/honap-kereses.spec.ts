import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonapKereses } from './honap-kereses';

describe('HonapKereses', () => {
  let component: HonapKereses;
  let fixture: ComponentFixture<HonapKereses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HonapKereses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonapKereses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
