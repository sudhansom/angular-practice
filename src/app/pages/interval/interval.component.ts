import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  myInterval$ = interval(2000);

  ngOnInit(): void {
    this.myInterval$.subscribe((value) => console.log(value));
  }
}
