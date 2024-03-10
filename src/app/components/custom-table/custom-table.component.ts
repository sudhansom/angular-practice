import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
  @Input() data = [];
  @ContentChild('header') header: TemplateRef<any>;
}
