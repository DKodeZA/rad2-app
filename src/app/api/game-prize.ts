export interface GamePrize {
    game: GameType;
    amount: number;
    prize: PrizeOption;
}

export interface GamePrizeOffer extends GamePrize {
    countdown: number;
}

declare type PrizeOption = 'Free Spins';
declare type GameType = 'Gemix';
