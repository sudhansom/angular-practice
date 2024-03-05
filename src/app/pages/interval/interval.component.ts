import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalComponent implements OnInit {
  myInterval$ = interval(2000);
  val = 0;

  ngOnInit(): void {
    this.myInterval$.subscribe((value) => {
      this.val = value;
    });
  }
}
