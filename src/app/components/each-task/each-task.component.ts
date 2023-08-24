import { Component, Input } from '@angular/core';

import { ITodos } from 'src/types';

@Component({
  selector: 'app-each-task',
  templateUrl: './each-task.component.html',
  styleUrls: ['./each-task.component.scss']
})
export class EachTaskComponent {
  @Input() task?: ITodos;
}
