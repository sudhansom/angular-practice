import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { User } from '../type';
import { Observable } from 'rxjs';

@Component({
  selector: 'newsletter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset class="newsletter">
      <legend>Newsletter</legend>

      <h5>
        Hello {{ (user$ | async).firstName }}, enter your email below to
        subscribe:
      </h5>
      <form>
        <input
          #email
          type="email"
          name="email"
          placeholder="Enter your Email"
        />

        <input
          type="button"
          class="button button-primary"
          value="Subscribe"
          (click)="subscribeToNewsletter(email.value)"
        />
      </form>
    </fieldset>
  `,
})
export class NewsletterComponent {
  @Input()
  user$: Observable<User>;

  @Output()
  subscribe = new EventEmitter();

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
