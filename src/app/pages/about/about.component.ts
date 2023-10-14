import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  from,
  map,
  mergeAll,
  mergeMap,
  of,
  delay,
} from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  items$ = from(['apple', 'laptop', 'house', 'football']);
  constructor(private _uiService: UiService) {}
  myfunc = (item) => {
    return of(item + ' done').pipe(delay(1000));
  };
  finalFunc = (item) => {
    return of(item + 'final processed item').pipe(delay(2000));
  };
  ngOnInit(): void {
    this.items$
      .pipe(
        mergeMap((item) => this.myfunc(item)),
        mergeMap((item) => this.finalFunc(item))
      )
      .subscribe(console.log);

    this._uiService.print('sudhan som poudel', 'containerId');
    this._uiService.print('sudhan som poudel1', 'containerId');
    this._uiService.print('sudhan som poudel2', 'containerId');
  }
}
