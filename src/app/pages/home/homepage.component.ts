import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit, AfterViewChecked {
  @ViewChild('newBtn') newBtn: ElementRef;
  open$ = this.uiService.open$;
  constructor(private uiService: UiService, private el: ElementRef) {}
  input = [
    {
      role: 'user',
      name: 'tendency',
      value: ' Medium',
    },
    {
      role: 'user',
      name: 'tendency',
      value: ' High',
    },
    {
      role: 'user',
      name: 'status',
      value: ' Pending',
    },
    {
      role: 'user',
      name: 'status',
      value: ' Rejected',
    },
    {
      role: 'user',
      name: 'date',
      value: ' 2023-08-30',
    },
    {
      role: 'user',
      name: 'date',
      value: ' 2023-08-31',
    },
  ];
  newArray = [];
  ngOnInit(): void {
    //debugger;
    this.input.forEach((item) => {
      const { role, name, value } = item;
      let inserted = false;
      if (!this.newArray.length) {
        this.newArray = [{ role, [name]: value }];
      } else {
        this.newArray.forEach((item, i) => {
          if (!item[name] && !inserted) {
            this.newArray[i] = { ...this.newArray[i], role, [name]: value };
            inserted = true;
            return;
          }
        });
        if (!inserted) {
          this.newArray = [...this.newArray, { role, [name]: value }];
          inserted = true;
        }
      }
    });
    console.log(this.newArray);

    console.time();
    console.log(this.memoization(this.complexCompute)(1000));
    console.timeEnd();
  }

  throttledFunction = (expensive1: () => void, limit: number) => {
    let flag = true;
    return () => {
      if (flag) {
        expensive1();
        flag = false;
      }
      setTimeout(() => {
        flag = true;
      }, limit);
    };
  };
  debounceFunction = (expensive2: () => void, delay: number) => {
    let timerId: any; // NodeJS.Timeout;
    return (...args: string[]) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        // expensive2(); //
        expensive2.apply(this, args);
      }, delay);
    };
  };
  // betterExpensive = this.throttledFunction(this.expensiveCall, 1000);
  betterExpensive = this.debounceFunction(this.expensiveCall, 1000);
  expensiveCall() {
    console.log('expensive call...');
  }

  complexCompute(n: number): number {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += i;
    }
    return sum;
  }

  memoization = (func: (number: number) => number) => {
    let caching = {};
    return (...args) => {
      if (caching[args[0]]) {
        return caching[args[0]];
      }
      let result = func(args[0]);
      caching[args[0]] = result;
      return result;
    };
  };

  abc = (a: number, b: number) => {
    return a + b;
  };
  anotherAbc = this.abc.bind(null, 1);

  openNavMenu() {
    this.uiService.open$.next(false);
  }
  @HostListener('window: resize') onResize() {
    if (window.innerWidth > 768) {
      this.open$.next(false);
    }
  }
  ngAfterViewChecked(): void {
    this.newBtn.nativeElement.addEventListener('click', () => {});
  }

  capitalizeString(str: string) {
    //return str.replace(/\w\S*\g, (w)=>w.replace(/^\w/, (c)=>c.toUpperCase()));
  }
}
