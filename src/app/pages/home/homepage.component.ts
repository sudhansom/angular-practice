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

      console.time();
      console.log(this.memoization(this.complexCompute)(1000));
      console.timeEnd();

    }
  @HostListener('click') onClick(){
    //this.betterExpensive();
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
    return (...args: string[])=>{
      if(timerId) clearTimeout(timerId);
      timerId = setTimeout(()=>{
       // expensive2(); //
         expensive2.apply(this, args);
      }, delay);
    }
  }
  // betterExpensive = this.throttledFunction(this.expensiveCall, 1000);
  betterExpensive = this.debounceFunction(this.expensiveCall, 1000);
  expensiveCall(){
    console.log('expensive call...');
  }

  complexCompute(n){
    let sum = 0;
    for(let i=0; i<n; i++){
      sum += i;
    }
    return sum;
  }

  memoization = (func)=>{
    let caching = {};
    return (...args)=>{
      if(caching[args[0]]){
        return caching[args[0]]
      }
      let result = func(args[0]);
      caching[args[0]] = result;
      return result;
    }
  }

  }
