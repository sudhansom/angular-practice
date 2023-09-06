import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements AfterViewChecked {

  @ViewChild('grand') grand: ElementRef;
  @ViewChild('parent') parent1: ElementRef;
  @ViewChild('child1') child1: ElementRef;

  grandParent(){
    console.log('grandParent.... clicked...');
  }

  parent(){
    console.log('Parent.... clicked...');
  }

  child(){
    console.log('child.... clicked...');
  }

  ngAfterViewChecked(): void {
      this.grand.nativeElement.addEventListener('click', ()=>{
        console.log('grandParent got clicked...');
      })

      this.parent1.nativeElement?.addEventListener('click', (e)=>{
        console.log('parent got clicked...');
       e.stopPropagation();
      })

      this.child1.nativeElement?.addEventListener('click', (e)=>{
        console.log('child got clicked...');
        e.stopPropagation();
      })
  }

}
