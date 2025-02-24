import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPatternComponent } from './star-pattern.component';

describe('StarPatternComponent', () => {
  let component: StarPatternComponent;
  let fixture: ComponentFixture<StarPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
