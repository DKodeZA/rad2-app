import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePrizeComponent } from '../game-prize.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamePrizeService } from '../game-prize.service';

describe('GamePrizeComponent', () => {
  let component: GamePrizeComponent;
  let fixture: ComponentFixture<GamePrizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePrizeComponent ],
      imports: [HttpClientModule, BrowserAnimationsModule],
      providers: [GamePrizeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePrizeComponent);
    component = fixture.componentInstance;
    component.gamePrizeOffer = {amount: 50, game: 'Gemix', prize: 'Free Spins', countdown: 25000};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('countdown timer value is correct', () => {
    component.timeLeft = 25000;
    expect(component.getCountdownTimer()).toEqual('00:25');
  });

  it('button should be disabled', () => {
    component.timeLeft = 0;
    expect(fixture.nativeElement.querySelector('button').disabled).toEqual(true);
  });

  it('timer should be expired', () => {
    component.timeLeft = 0;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.expired')).toBeTruthy();
  });

  it('claim state must show claim content', () => {
    component.state = 'CLAIM';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.timer')).toBeTruthy();
  });

  it('success state must show success content', () => {
    component.state = 'SUCCESS';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.success')).toBeTruthy();
  });

});
