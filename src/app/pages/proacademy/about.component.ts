import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements DoCheck {
  input1 = '';

  ngOnInit() {
    console.log('rendered....onInit...');
  }

  ngDoCheck(): void {
    console.log('rendered....again...');
  }

  clickButton() {
    console.log('clicked button....');
  }

  constructor() {
    console.log('rendered....constructor...');
  }
}
