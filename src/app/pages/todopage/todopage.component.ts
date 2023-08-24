import { Component } from '@angular/core';

import { UiService } from 'src/app/services/ui.service';

import { ITodos } from 'src/types';

@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodopageComponent  {
  constructor(private _uiService: UiService){}

  addShowButton = this._uiService.addShowButton;

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
