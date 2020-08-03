import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePrizeComponent } from './game-prize/game-prize.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'game-prize'},
  {path: 'game-prize', component: GamePrizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
