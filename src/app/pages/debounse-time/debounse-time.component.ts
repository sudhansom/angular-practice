import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription, of, concat } from 'rxjs';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-debounse-time',
  templateUrl: './debounse-time.component.html',
  styleUrls: ['./debounse-time.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebounseTimeComponent implements OnInit {
  subscription!: Subscription;
  result$: Observable<number>;

  form: FormGroup;

  ngOnInit(): void {
    const source1$ = of(1, 2, 3);
    const source2$ = of(4, 5, 6);
    const source3$ = of(7, 8, 9);

    this.result$ = concat(source1$, source2$, source3$);
    this.result$.subscribe(console.log);
  }
}
