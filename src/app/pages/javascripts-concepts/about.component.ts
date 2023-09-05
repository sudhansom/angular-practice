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
    showFullName: function(){
      console.log(`${this.name} lives in ${this.address}`)
    }
  }

  person2 = {
    name: 'resham',
    address: 'ktm'
  }

  ngOnInit(): void {
      this.person.showFullName();
      this.person.showFullName.call(this.person2);
  }

}
