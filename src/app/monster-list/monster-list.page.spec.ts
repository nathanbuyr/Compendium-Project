import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonsterListPage } from './monster-list.page';

describe('MonsterListPage', () => {
  let component: MonsterListPage;
  let fixture: ComponentFixture<MonsterListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
