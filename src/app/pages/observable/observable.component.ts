import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Subscription, map, filter, tap } from 'rxjs';

import { createObservables } from 'src/app/util/createObservable';
import { Course } from 'src/app/util/type';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent implements OnInit  {
  subscription!: Subscription;
  beginner$: Observable<Course[]>;
  advanced$: Observable<Course[]>;

  ngOnInit(): void {
    const http$: Observable<Course[]> = createObservables('http://localhost:9001/courses');
    const courses$ = http$.pipe(
      map(res => res),
      tap((val)=>console.log('take the value here... ', val)),
      shareReplay()
      );


   this.beginner$ = courses$.pipe(
                              map(courses => courses
                                .filter(course => course.category==='beginner')));
   this.advanced$ = courses$.pipe(
                              map(courses => courses
                                .filter(course => course.category==='advance')));

  }
}
