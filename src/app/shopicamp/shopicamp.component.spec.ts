import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopicampComponent } from './shopicamp.component';

describe('ShopicampComponent', () => {
  let component: ShopicampComponent;
  let fixture: ComponentFixture<ShopicampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopicampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopicampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
