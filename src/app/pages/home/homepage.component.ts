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
  newArray = [{}, {}]
  ngOnInit(): void {
    this.input.forEach(
      item => {
        const { role, name, value } = item;
         //this.newArray.push({ ...this.newArray, role, [name]: value });

          if(!(name in this.newArray[0])){
            this.newArray[1] = { ...this.newArray[1], role, [name]: value };
          }else{
            this.newArray[0] = { ...this.newArray[0], role, [name]: value };
          }
      })
      console.log(this.newArray);

    }

  }
