import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvKereses } from './ev-kereses';

describe('EvKereses', () => {
  let component: EvKereses;
  let fixture: ComponentFixture<EvKereses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvKereses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvKereses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
