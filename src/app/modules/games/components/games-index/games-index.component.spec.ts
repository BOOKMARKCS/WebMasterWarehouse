import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesIndexComponent } from './games-index.component';

describe('GamesIndexComponent', () => {
  let component: GamesIndexComponent;
  let fixture: ComponentFixture<GamesIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesIndexComponent]
    });
    fixture = TestBed.createComponent(GamesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
