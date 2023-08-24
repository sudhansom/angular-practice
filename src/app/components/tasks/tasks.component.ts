import { Component, Input } from '@angular/core';

import { ITodos } from 'src/types';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() todos: ITodos[] = [];
}
