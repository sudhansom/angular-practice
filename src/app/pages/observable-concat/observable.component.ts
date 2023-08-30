import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription, of, concat } from 'rxjs';





@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent implements OnInit  {
  subscription!: Subscription;
  result$: Observable<number>;

  ngOnInit(): void {
   const source1$ = of(1, 2, 3);
   const source2$ = of(4, 5, 6);
   const source3$ = of(7, 8, 9);

   this.result$ = concat(source1$, source2$, source3$);
   this.result$.subscribe(console.log);
  }
}
