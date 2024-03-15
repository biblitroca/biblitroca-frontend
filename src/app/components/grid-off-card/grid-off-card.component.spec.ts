import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOffCardComponent } from './grid-off-card.component';

describe('GridOffCardComponent', () => {
  let component: GridOffCardComponent;
  let fixture: ComponentFixture<GridOffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridOffCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridOffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
