import { Component } from '@angular/core';
import {
  burgerMenuLine1,
  burgerMenuLine2,
  burgerMenuLine3,
} from './animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [burgerMenuLine1, burgerMenuLine2, burgerMenuLine3],
})
export class NavbarComponent {
  open = false;

  toogleMenu() {
    this.open = !this.open;
  }
}
