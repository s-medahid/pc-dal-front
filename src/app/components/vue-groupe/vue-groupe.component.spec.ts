import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueGroupeComponent } from './vue-groupe.component';

describe('VueGroupeComponent', () => {
  let component: VueGroupeComponent;
  let fixture: ComponentFixture<VueGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueGroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
