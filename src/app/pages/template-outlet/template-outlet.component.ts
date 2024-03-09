import { Component } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.scss'],
})
export class TemplateOutletComponent {
  employees = [
    { name: 'Baburam', age: 45 },
    { name: 'Sudhan', age: 42 },
    { name: 'Resham', age: 40 },
    { name: 'Biren', age: 39 },
  ];
}
