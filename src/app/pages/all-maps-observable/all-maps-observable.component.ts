import { Component, OnInit } from '@angular/core';
import { of, from, map, delay, BehaviorSubject, mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-all-maps-observable',
  templateUrl: './all-maps-observable.component.html',
  styleUrls: ['./all-maps-observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllMapsObservableComponent implements OnInit {

  mergeMapData$ = new BehaviorSubject<string[]>([]);
  concatMapData$ = new BehaviorSubject<string[]>([]);
  switchMapData$ = new BehaviorSubject<string[]>([]);
  exhaustMapData$ = new BehaviorSubject<string[]>([]);

  ngOnInit(){
    const source$ = from(['Series', 'Movies', 'Sports']);

    source$.pipe(
      mergeMap(data => this.getData(data)),
    )
    .subscribe(data =>
      this.mergeMapData$.next([...this.mergeMapData$.getValue(), data])
    )

    source$.pipe(
      concatMap(data => this.getData(data)),
    )
    .subscribe(data =>
      this.concatMapData$.next([...this.concatMapData$.getValue(), data])
    )

    source$.pipe(
      switchMap(data => this.getData(data)),
    )
    .subscribe(data =>
      this.switchMapData$.next([...this.switchMapData$.getValue(), data])
    )

    source$.pipe(
      exhaustMap(data => this.getData(data)),
    )
    .subscribe(data =>
      this.exhaustMapData$.next([...this.exhaustMapData$.getValue(), data])
    )
  }

  getData(data){
    return of(data + 'Video Uploaded...').pipe(delay(1000));
  }

}
