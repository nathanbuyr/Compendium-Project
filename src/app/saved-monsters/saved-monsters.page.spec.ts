import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedMonstersPage } from './saved-monsters.page';

describe('SavedMonstersPage', () => {
  let component: SavedMonstersPage;
  let fixture: ComponentFixture<SavedMonstersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedMonstersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
