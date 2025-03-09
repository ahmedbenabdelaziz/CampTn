import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementcheckoutComponent } from './payementcheckout.component';

describe('PayementcheckoutComponent', () => {
  let component: PayementcheckoutComponent;
  let fixture: ComponentFixture<PayementcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayementcheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
