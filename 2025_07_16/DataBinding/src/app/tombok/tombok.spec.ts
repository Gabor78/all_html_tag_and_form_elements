import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tombok } from './tombok';

describe('Tombok', () => {
  let component: Tombok;
  let fixture: ComponentFixture<Tombok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tombok]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tombok);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
