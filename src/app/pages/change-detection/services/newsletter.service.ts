import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  subscribeEmail(email: string): Observable<string> {
    return of(`subscribed given email ${email}`);
  }
}
