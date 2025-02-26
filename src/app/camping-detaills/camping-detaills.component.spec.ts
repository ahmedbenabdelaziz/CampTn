import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingDetaillsComponent } from './camping-detaills.component';

describe('CampingDetaillsComponent', () => {
  let component: CampingDetaillsComponent;
  let fixture: ComponentFixture<CampingDetaillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampingDetaillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampingDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
