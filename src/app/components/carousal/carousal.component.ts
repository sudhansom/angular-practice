import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarousalComponent {
  images = [
    '../../../assets/all-access-01.jpg',
    '../../../assets/all-access-02.jpg',
    '../../../assets/all-access-03.jpg',
    '../../../assets/all-access-01.jpg',
    '../../../assets/all-access-02.jpg',
    '../../../assets/all-access-03.jpg',
    '../../../assets/all-access-01.jpg',
  ];
  currentIndex$ = new BehaviorSubject(0);
  noOfSlides$ = new BehaviorSubject(7);
  // showPrev$ = new BehaviorSubject(false);
  // showNext$ = new BehaviorSubject(true);

  slideToIndex(i: number) {
    this.currentIndex$.next(i);
  }
  bullets$ = combineLatest([this.currentIndex$, this.noOfSlides$]).pipe(
    map(([currentIndex, noOfSlides]) => {
      return Array.from(Array(noOfSlides)).map((v, i) => {
        return i === currentIndex;
      });
    })
  );
  showPrev$ = this.currentIndex$.pipe(
    map((currentIndex) => {
      if (currentIndex === 0) {
        return false;
      }
      return true;
    })
  );

  showNext$ = combineLatest([this.currentIndex$, this.noOfSlides$]).pipe(
    map(([currentIndex, noOfSlides]) => {
      if (currentIndex < noOfSlides - 1) {
        return true;
      }
      return false;
    })
  );

  handleNext() {
    if (
      this.currentIndex$.getValue() >= 0 &&
      this.currentIndex$.getValue() < this.noOfSlides$.getValue() - 1
    ) {
      this.currentIndex$.next(this.currentIndex$.getValue() + 1);
    }
  }

  handlePrev() {
    if (
      this.currentIndex$.value > 0 &&
      this.currentIndex$.getValue() <= this.noOfSlides$.getValue()
    ) {
      this.currentIndex$.next(this.currentIndex$.getValue() - 1);
    }
  }
  @HostBinding('style.--background-image') get getImage() {
    return `url('${this.images[this.currentIndex$.value]}')`;
  }
}
