import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuePersonnelComponent } from './vue-personnel.component';

describe('VuePersonnelComponent', () => {
  let component: VuePersonnelComponent;
  let fixture: ComponentFixture<VuePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuePersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
