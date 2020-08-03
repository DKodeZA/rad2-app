import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SpinnerService {

    showSpinner$ = new BehaviorSubject<boolean>(false);
    private requestCount = 0;

    addRequest(): void {
        this.requestCount++;
        this.updateShowSpinner(this.requestCount > 0);
    }

    removeRequest(): void {
        this.requestCount--;
        this.updateShowSpinner(this.requestCount > 0);
    }

    updateShowSpinner(state: boolean): void {
        this.showSpinner$.next(state);
    }
}
