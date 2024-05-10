import { TestBed } from '@angular/core/testing';

import { SavedMonstersService } from './save-monsters.service';

describe('SaveMonstersService', () => {
  let service: SavedMonstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedMonstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
