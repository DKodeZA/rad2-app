import { Component } from '@angular/core';
import { SpinnerService } from '../lib/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rad2-app';
  showSpinner = false;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.showSpinner$.subscribe(showSpinner => {
      this.showSpinner = showSpinner;
    });
  }
}
