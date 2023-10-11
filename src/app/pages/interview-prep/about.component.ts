import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
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
}
