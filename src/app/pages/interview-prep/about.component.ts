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

  romanToNumber(roman: string) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      if (i < roman.length - 1 && map[roman[i]] < map[roman[i + 1]]) {
        result -= map[roman[i]];
      } else {
        result += map[roman[i]];
      }
    }
    return result;
  }

  anamgramTest(str1: string, str2: string) {
    let word1 = str1.replace(/\s/g, '');
    let word2 = str2.replace(/\s/g, '');

    const charCount1 = {};
    const charCount2 = {};

    for (let char of word1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of word2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }

    for (let char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }

    return true;
  }
  mergeSort(arr: number[]) {
    if (arr.length < 2) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
  }
  merge(leftArray: number[], rightArray: number[]) {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray.shift());
      } else {
        sortedArray.push(rightArray.shift());
      }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
  }
}
