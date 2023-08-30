import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription, map, filter } from 'rxjs';

import { createObservables } from 'src/app/util/createObservable';
import { Course } from 'src/app/util/type';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent implements OnInit, OnDestroy  {
  subscription!: Subscription;
  beginner$: Observable<Course[]>;
  advanced$: Observable<Course[]>;

  ngOnInit(): void {
    const http$: Observable<Course[]> = createObservables('http://localhost:9001/courses');
    //const courses$ = http$.pipe(map(res =>Object.values(res['payload'])));

    http$.subscribe(data => console.log(data))

    //console.log(http$);

   this.beginner$ = http$.pipe(
                              map(courses => courses
                                .filter(course => course.category==='beginner')));
   this.advanced$ = http$.pipe(
                              map(courses => courses
                                .filter(course => course.category==='advance')));

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
