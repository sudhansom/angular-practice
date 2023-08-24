import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
  @Input() backgroundColor = 'black';
  @Input() buttonText = 'Show Form';

  addShowButton = this._uiServce.addShowButton;

  constructor(private _uiServce: UiService){}

  toogleButton(){
    console.log('clicked.....');
    this._uiServce.toogleButton();
  }
}
