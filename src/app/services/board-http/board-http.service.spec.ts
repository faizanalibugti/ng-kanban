import { TestBed } from '@angular/core/testing';

import { BoardHttpService } from './board-http.service';

describe('BoardHttpService', () => {
  let service: BoardHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
