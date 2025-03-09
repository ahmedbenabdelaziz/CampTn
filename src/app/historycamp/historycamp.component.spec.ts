import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorycampComponent } from './historycamp.component';

describe('HistorycampComponent', () => {
  let component: HistorycampComponent;
  let fixture: ComponentFixture<HistorycampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorycampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorycampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
