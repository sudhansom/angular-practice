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

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId).appendChild(el);
  }
}
