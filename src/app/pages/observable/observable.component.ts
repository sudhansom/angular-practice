import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, filter } from 'rxjs';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent implements OnInit, OnDestroy  {
  subscription!: Subscription;

  ngOnInit(): void {
    const obs$ = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        count ++;
        if(count === 4){
          observer.complete();
        }
        if(count > 6){
          observer.error('failed...')
        }
        observer.next(count);
      }, 1000);
    });
    this.subscription = obs$.pipe(filter(item => Number(item) > 1),map(item=> item + ' modified')).subscribe(data => console.log(data), error=>console.log(error), ()=>console.log('completed...'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
