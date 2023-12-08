import { Component } from '@angular/core';

import { User } from '../type';
import { NewsletterService } from '../services/newsletter.service';
import { UserService } from '../newsletter/users.service';

@Component({
  selector: 'home',
  template: `
    <newsletter
      [user$]="userService.user$"
      (subscribe)="subscribe($event)"
    ></newsletter>
    <button (click)="changeUserName()">Change User Name</button>
  `,
})
export class HomeComponent {
  // user: User = {
  //   firstName: 'Alice',
  //   lastName: 'Smith',
  // };

  constructor(
    private newsletterService: NewsletterService,
    public userService: UserService
  ) {}

  subscribe(email: string) {
    this.newsletterService.subscribeEmail(email).subscribe(console.log);
  }

  changeUserName() {
    // this.user.firstName = 'Bob';
    // this.user = {
    //   firstName: 'Bob',
    //   lastName: 'Smith',
    // };
    this.userService.loadUser({ firstName: 'Bob', lastName: 'Smithe' });
  }
}
