import { Component } from '@angular/core';

import { ITodos } from 'src/types';

@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodopageComponent  {
  todos: ITodos[] = [
    {
      id: 1,
      todo: 'Todo 1',
      date: new Date(),
      complete: false,
    },
    {
      id: 2,
      todo: 'Todo 2',
      date: new Date(),
      complete: false,
    },
    {
      id: 3,
      todo: 'Todo 3',
      date: new Date(),
      complete: false,
    },
    {
      id: 4,
      todo: 'Todo 4',
      date: new Date(),
      complete: false,
    },
  ]
}
