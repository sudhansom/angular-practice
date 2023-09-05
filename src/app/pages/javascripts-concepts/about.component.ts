import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit  {

  person = {
    name: 'sudhan',
    address: 'Lalim',
  }

  person2 = {
    name: 'resham',
    address: 'ktm'
  }

  showFullName = function(){
    console.log(`${this.name} lives in ${this.address}`)
  }

  ngOnInit(): void {
      this.showFullName.call(this.person);
      this.showFullName.call(this.person2);
  }

}
