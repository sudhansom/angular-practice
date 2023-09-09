import { Component, HostListener, OnInit } from '@angular/core';
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
  @HostListener('click') onClick(){
    this.betterExpensive();
    //this.expensiveCall();
  }

  throttledFunction = (expensive1: ()=>void, limit: number)=>{
    let flag = true;
    return ()=>{
      if(flag){
        expensive1();
        flag = false;
      }
      setTimeout(()=>{
        flag = true;
      }, limit)
    }

  }
  debounceFunction = (expensive2: ()=> void, delay: number)=>{
    let timerId: any // NodeJS.Timeout;
    return ()=>{
      clearTimeout(timerId);
      timerId = setTimeout(()=>{
        expensive2();
      }, delay);
    }
  }
  // betterExpensive = this.throttledFunction(this.expensiveCall, 1000);
  betterExpensive = this.debounceFunction(this.expensiveCall, 1000);
  expensiveCall(){
    console.log('expensive call...');
  }

  }
