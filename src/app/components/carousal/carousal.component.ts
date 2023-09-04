import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';



@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarousalComponent  {
  currentIndex$ = new BehaviorSubject(0);
  noOfSlides$ = new BehaviorSubject(6);
  // showPrev$ = new BehaviorSubject(false);
  // showNext$ = new BehaviorSubject(true);

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
  showPrev$ = this.currentIndex$.pipe(
    map(currentIndex => {
      if(currentIndex === 0){
        return false
      }
      return true;
    })
  )

  showNext$ = combineLatest([this.currentIndex$, this.noOfSlides$]).pipe(
    map(([currentIndex,noOfSlides]) => {
      if(currentIndex < noOfSlides - 1){
        return true;
      }
      return false;
    }
  ))

  handleNext(){
    if(this.currentIndex$.getValue() >= 0 && this.currentIndex$.getValue() < this.noOfSlides$.getValue()-1){
      this.currentIndex$.next(this.currentIndex$.getValue() + 1);
    }
    // this.showPrev$.next(this.currentIndex$.getValue()>=1?true:false);
    // this.showNext$.next(this.currentIndex$.getValue()<(this.noOfSlides$.getValue()-1)?true:false);
  }

  handlePrev(){
    if(this.currentIndex$.getValue() > 0 && this.currentIndex$.getValue() <= this.noOfSlides$.getValue()){
      this.currentIndex$.next(this.currentIndex$.getValue() - 1);
    }
    // this.showPrev$.next(this.currentIndex$.getValue()>=1?true:false);
    // this.showNext$.next(this.currentIndex$.getValue()<(this.noOfSlides$.getValue()-1)?true:false);
  }
}
