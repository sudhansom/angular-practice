import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  lightColorRed$ = new BehaviorSubject('red');
  lightColorYellow$ = new BehaviorSubject('');
  lightColorGreen$ = new BehaviorSubject('');


  timerId : any;
  ngOnInit(): void {
       setInterval(()=>{
        this.operate();
       }, 10000);
  }
  operate(){
    clearTimeout(this.timerId);
    this.timerId = setTimeout(()=>{
      this.lightColorGreen$.next('');
      this.lightColorRed$.next('red');
      this.lightColorYellow$.next('yellow');
      clearTimeout(this.timerId);
    }, 2000)
    this.timerId = setTimeout(()=>{
      this.lightColorGreen$.next('green');
      this.lightColorRed$.next('');
      this.lightColorYellow$.next('');
      clearTimeout(this.timerId);
    }, 8000)
    this.timerId = setTimeout(()=>{
      this.lightColorGreen$.next('');
      this.lightColorRed$.next('');
      this.lightColorYellow$.next('yellow');
      clearTimeout(this.timerId);
    }, 10000)
    this.timerId = setTimeout(()=>{
      this.lightColorGreen$.next('');
      this.lightColorRed$.next('red');
      this.lightColorYellow$.next('');
      clearTimeout(this.timerId);
    }, 12000)
  }
}
