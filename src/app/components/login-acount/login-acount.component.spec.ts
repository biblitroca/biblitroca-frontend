import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAcountComponent } from './login-acount.component';

describe('LoginAcountComponent', () => {
  let component: LoginAcountComponent;
  let fixture: ComponentFixture<LoginAcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAcountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
