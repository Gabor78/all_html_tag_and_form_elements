import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngforminta } from './ngforminta';

describe('Ngforminta', () => {
  let component: Ngforminta;
  let fixture: ComponentFixture<Ngforminta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ngforminta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngforminta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
