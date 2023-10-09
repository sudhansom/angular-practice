import { Component } from '@angular/core';
import {
  burgerMenuLine1,
  burgerMenuLine2,
  burgerMenuLine3,
} from './animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [burgerMenuLine1, burgerMenuLine2, burgerMenuLine3],
})
export class AnimationComponent {
  open = false;

  toogleMenu() {
    this.open = !this.open;
  }
}
