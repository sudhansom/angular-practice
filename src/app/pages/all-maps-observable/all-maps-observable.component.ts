import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, from, map, delay, BehaviorSubject, mergeMap, concatMap, switchMap, exhaustMap, fromEvent, debounceTime, distinctUntilChanged } from 'rxjs';
import { createObservables, createObservablesCountry } from 'src/app/util/createObservable';

@Component({
  selector: 'app-all-maps-observable',
  templateUrl: './all-maps-observable.component.html',
  styleUrls: ['./all-maps-observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllMapsObservableComponent implements OnInit, AfterViewInit {

  @ViewChild('input') input : ElementRef;

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

  ngAfterViewInit(): void {
     const searchCountry = fromEvent<any>(this.input.nativeElement, 'keyup')
     .pipe(
      map(event => event.target.value),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(search =>this.loadCountryByName(search))
     )

     searchCountry.subscribe(console.log);
    //  const aaa = this.loadCountryByName('Nepal');
    //  aaa.subscribe(console.log);
  }

  loadCountryByName(name=''){
    return createObservablesCountry(`https://restcountries.com/v3.1/name/${name}`)
      .pipe(
        map(country => country[0].name.common)
      )
  }

}
