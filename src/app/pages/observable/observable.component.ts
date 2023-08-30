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
  beginner = [];
  advanced = [];

  ngOnInit(): void {
    const obs$ = createObservables();
    const courses$ = obs$.pipe(map(res =>res['payload']));

    courses$.subscribe(data => console.log('obs: ', data));

    courses$.subscribe(data => {
      this.advanced = data.filter(item => item.category==='advance');
      this.beginner = data.filter(item => item.category==='beginner');
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
