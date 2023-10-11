import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  isPalindrome$ = new BehaviorSubject<boolean>(true);
  ngOnInit(): void {
    console.log('hello');
  }

  isPalindrome(word: string): void {
    let newWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = newWord.length - 1;
    while (left < right) {
      if (newWord[left] !== newWord[right]) {
        this.isPalindrome$.next(false);
        return;
      }
      left++;
      right--;
    }
  }

  isPrimeNumber(num: number) {
    console.log(num % 3);
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
}
