import { TestBed } from '@angular/core/testing';

import { GamePrizeService } from '../game-prize.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('GamePrizeService', () => {
  let service: GamePrizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient, GamePrizeService]
    });
    service = TestBed.inject(GamePrizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
