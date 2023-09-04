import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';



@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarousalComponent  {
  currentIndex$ = new BehaviorSubject(-1);
  noOfSlides$ = new BehaviorSubject(6);

  slideToIndex(i: number){
    this.currentIndex$.next(i);
  }
  bullets$ = combineLatest([this.currentIndex$, this.noOfSlides$]).pipe(
    map(([currentIndex, noOfSlides])=> {
      return Array.from(Array(noOfSlides)).map((v,i)=>{
        return i === currentIndex;
      })
     }
  ))
}
