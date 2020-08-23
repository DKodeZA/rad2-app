import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamePrize, GamePrizeOffer } from '../api/game-prize';

@Injectable()
export class GamePrizeService {

  constructor(private http: HttpClient) { }

  getGamePrize(): Promise<GamePrizeOffer> {
    return this.http.get<GamePrizeOffer>('/game-prize').toPromise();
  }

  submitGamePrize(gamePrize: GamePrize): Promise<GamePrize> {
    return this.http.post<GamePrize>('/game-prize', gamePrize).toPromise();
  }
}
