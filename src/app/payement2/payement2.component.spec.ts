import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Payement2Component } from './payement2.component';

describe('Payement2Component', () => {
  let component: Payement2Component;
  let fixture: ComponentFixture<Payement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Payement2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Payement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
