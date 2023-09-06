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

      let anotherFunction = this.showFullName.bind(this.person, 22, 179);

      anotherFunction();

      console.log(this.anotherOne(8));

      console.log(this.sum1(1)(2)(7)());
  }

  multiply = function(x){
    return function(y){
      return x * y;
    }
  }

  anotherOne = this.multiply(9);

  sum = a => {
    return b => {
      return b? this.sum(a + b) : a;
    }
  }

  sum1 = a => b => {return b?this.sum(a+b): a};

}
