import { Component, OnInit } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { HotColdService } from 'src/app/services/hot-cold.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit  {
  user$: Observable<{id: number, name: string}> = this._coldhotService.getUsers();
  //user1$ = new Subject<{id: number, name: string}>();
  user1: {id: number, name: string};
  user2: {id: number, name: string};
  user3: {id: number, name: string};

  ngOnInit(): void {
    this.user$.subscribe(data => this.user1 = data);
    this.user$.subscribe(data => this.user2 = data);
    this.user$.subscribe(data => this.user3 = data);
  }

  constructor(private _coldhotService: HotColdService){}
}
