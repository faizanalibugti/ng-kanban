import { TestBed } from '@angular/core/testing';

import { BoardDataService } from './board-data.service';

describe('BoardDataService', () => {
  let service: BoardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
