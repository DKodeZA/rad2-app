import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePrizeComponent } from './game-prize/game-prize.component';
import { SpinnerInterceptor } from '../lib/spinner/spinner-interceptor';
import { SpinnerService } from '../lib/spinner/spinner.service';
import { GamePrizeService } from './game-prize/game-prize.service';

@NgModule({
  declarations: [
    AppComponent,
    GamePrizeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SpinnerService,
    GamePrizeService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
