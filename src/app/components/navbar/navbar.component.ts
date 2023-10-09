import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
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
  constructor(private uiService: UiService) {}
  open$ = this.uiService.open$;

  toogleMenu() {
    this.open$.next(!this.uiService.open$.value);
  }
}
