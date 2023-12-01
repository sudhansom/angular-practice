import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  longestString(str: string) {
    let result = '';
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
      let tempStr = '';
      for (let j = i; j < str.length; j++) {
        if (tempStr.includes(str[j])) {
          break;
        } else {
          tempStr += str[j];
        }
      }
      if (tempStr.length > maxLength) {
        result = tempStr;
        maxLength = tempStr.length;
      }
    }
    console.log(result, maxLength);
  }

  longestString1(str: string) {
    let result = '';
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {}
  }
}
