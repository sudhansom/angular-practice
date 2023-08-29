import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, filter } from 'rxjs';

import { createObservables } from 'src/app/util/createObservable';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent implements OnInit, OnDestroy  {
  subscription!: Subscription;

  ngOnInit(): void {
    const obs$ = createObservables();
    const courses$ = obs$.pipe(map(res => res['payload']));

    courses$.subscribe(console.log)

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
