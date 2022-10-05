import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading$ = new Subject<boolean>();

  show(): void {
    this.isLoading$.next(true);
  }

  ripple(): void {
    this.isLoading$.next(false);
  }
}
