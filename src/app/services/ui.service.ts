import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  open$ = new BehaviorSubject(false);

  _addShowButton = new BehaviorSubject<boolean>(false);
  addShowButton = this._addShowButton.asObservable();

  toogleButton() {
    this._addShowButton.next(!this._addShowButton.getValue());
  }
}
