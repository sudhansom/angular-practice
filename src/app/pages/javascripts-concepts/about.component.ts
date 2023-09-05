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

  showFullName = function(age, height){
    console.log(`${this.name} lives in ${this.address}, ${age} years and ${height}cm`)
  }

  ngOnInit(): void {
      this.showFullName.call(this.person, 42, 169);
      this.showFullName.apply(this.person2, [40, 167]);
  }

}
