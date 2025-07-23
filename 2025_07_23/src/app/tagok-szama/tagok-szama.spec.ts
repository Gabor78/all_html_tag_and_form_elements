import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagokSzama } from './tagok-szama';

describe('TagokSzama', () => {
  let component: TagokSzama;
  let fixture: ComponentFixture<TagokSzama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagokSzama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagokSzama);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
