import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalComponent implements OnInit, OnDestroy {
  myInterval$ = interval(2000);
  val = 0;
  intervalSubs: Subscription;

  ngOnInit(): void {
    this.intervalSubs = this.myInterval$.subscribe((value) => {
      this.val = value;
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
}
