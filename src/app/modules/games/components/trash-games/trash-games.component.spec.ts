import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashGamesComponent } from './trash-games.component';

describe('TrashGamesComponent', () => {
  let component: TrashGamesComponent;
  let fixture: ComponentFixture<TrashGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashGamesComponent]
    });
    fixture = TestBed.createComponent(TrashGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
