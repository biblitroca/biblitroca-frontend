import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeboComponent } from './sebo.component';

describe('SeboComponent', () => {
  let component: SeboComponent;
  let fixture: ComponentFixture<SeboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
