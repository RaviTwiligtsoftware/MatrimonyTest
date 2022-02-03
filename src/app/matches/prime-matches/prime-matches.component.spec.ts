import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeMatchesComponent } from './prime-matches.component';

describe('PrimeMatchesComponent', () => {
  let component: PrimeMatchesComponent;
  let fixture: ComponentFixture<PrimeMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
