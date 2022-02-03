import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularMatchesComponent } from './regular-matches.component';

describe('RegularMatchesComponent', () => {
  let component: RegularMatchesComponent;
  let fixture: ComponentFixture<RegularMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
