import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGamesComponent } from './delete-games.component';

describe('DeleteGamesComponent', () => {
  let component: DeleteGamesComponent;
  let fixture: ComponentFixture<DeleteGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGamesComponent]
    });
    fixture = TestBed.createComponent(DeleteGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
