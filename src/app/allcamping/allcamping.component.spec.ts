import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcampingComponent } from './allcamping.component';

describe('AllcampingComponent', () => {
  let component: AllcampingComponent;
  let fixture: ComponentFixture<AllcampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllcampingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
