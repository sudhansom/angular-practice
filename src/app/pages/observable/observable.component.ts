import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent implements OnInit, OnDestroy  {
  subscription!: Subscription;

  ngOnInit(): void {
    const obs = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        count ++;
        observer.next(count);
      }, 1000);
    });
    this.subscription = obs.subscribe(data => console.log(data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
