import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit  {
  input = [
    {
      role: "user",
      name: "tendency",
      value: " Medium"
    },
    {
      role: "user",
      name: "tendency",
      value: " High"
    },
    {
      role: "user",
      name: "status",
      value: " Pending"
    },
    {
      role: "user",
      name: "status",
      value: " Rejected"
    },
    {
      role: "user",
      name: "date",
      value: " 2023-08-30"
    },
    {
      role: "user",
      name: "date",
      value: " 2023-08-31"
    },
  ]
  newArray = []
  ngOnInit(): void {
    //debugger;
    this.input.forEach(
      item => {
        const { role, name, value } = item;
        let inserted = false;
         if(!this.newArray.length){
          this.newArray = [ {role, [name]: value} ];
         }else{
           this.newArray.forEach((item, i) => {
            if(!item[name] && !inserted){
              this.newArray[i] = {...this.newArray[i], role, [name]: value}
              inserted = true;
              return
            }
           })
           if(!inserted){
            this.newArray = [...this.newArray, {role, [name]: value} ];
            inserted = true;
           }
         }
      })
      console.log(this.newArray);

    }

  }
