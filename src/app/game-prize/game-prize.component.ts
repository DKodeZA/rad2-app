import { Component, OnInit } from '@angular/core';
import { GamePrizeService } from './game-prize.service';
import { GamePrizeOffer } from '../api/game-prize';
import { inOutAnimation } from '../animations/animations';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

const TIMER_TICK_RATE = 1000;
const TIMER_PADDING = 2;

@Component({
  selector: 'app-game-prize',
  templateUrl: './game-prize.component.html',
  styleUrls: ['./game-prize.component.scss'],
  animations: [inOutAnimation]
})
export class GamePrizeComponent implements OnInit {

  gamePrizeOffer: GamePrizeOffer;
  loading = false;
  timeLeft: number;
  countdownTimer: Subscription;
  state: GamePrizeState = 'CLAIM';

  constructor(private gamePrizeService: GamePrizeService) { }

  ngOnInit(): void {
    this.loadPrize();
  }

  loadPrize(): void {
    this.loading = true;
    this.gamePrizeService.getGamePrize().then(res => {
      this.gamePrizeOffer = res;
      this.timeLeft = this.gamePrizeOffer.countdown;
      this.updateTimer();
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      this.loading = false;
    });
  }

  updateTimer(): void {
    this.countdownTimer = interval(TIMER_TICK_RATE).pipe(take(Math.round(this.timeLeft / TIMER_TICK_RATE))).subscribe(() => {
      this.timeLeft -= TIMER_TICK_RATE;
    });
  }

  getCountdownTimer(): string {
    const {minutes, seconds} = getSplitTime(this.timeLeft);
    return `${padValue(minutes, TIMER_PADDING)}:${padValue(seconds, TIMER_PADDING)}`;
  }

  claimPrize(): void {
    if (this.loading || this.state === 'SUCCESS') {
      return;
    }
    this.loading = true;
    const { countdown, ...gamePrize} = this.gamePrizeOffer;

    this.gamePrizeService.submitGamePrize(gamePrize).then(() => {
      this.state = 'SUCCESS';
      this.countdownTimer.unsubscribe();
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      this.loading = false;
    });
  }

}

function getSplitTime(milliseconds: number): SplitTime {
  return {
    minutes: Math.floor(milliseconds / (1000 * 60)),
    seconds: Math.floor(milliseconds % (1000 * 60)) * 0.001
  };
}

function padValue(value: number, padLength: number): string {
  let result = '';
  for (let i = 0; i < padLength - value.toString().length; i++) {
    result += '0';
  }
  result += value;
  return result;
}

interface SplitTime {
  minutes: number;
  seconds: number;
}

declare type GamePrizeState = 'CLAIM' | 'SUCCESS';
