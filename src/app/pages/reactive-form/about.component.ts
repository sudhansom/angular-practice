import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  from,
  map,
  mergeAll,
  mergeMap,
  of,
  delay,
  debounceTime,
  switchMap,
} from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  @ViewChild('image') image: ElementRef;
  items$ = from(['apple', 'laptop', 'house', 'football']);
  constructor(private _uiService: UiService) {}
  myfunc = (item) => {
    return of(item + ' done').pipe(delay(1000));
  };
  finalFunc = (item) => {
    return of(item + 'final processed item').pipe(delay(2000));
  };
  ngOnInit(): void {
    const http$ = this.form.valueChanges.pipe(
      map((changes) => (changes.name = 'aaa')),
      debounceTime(100),
      switchMap((changes) => this.myFunc(changes))
    );
    http$.subscribe(console.log);
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.form.value);
  }
  myFunc(changes) {
    return of(changes + '1').pipe();
  }
  browseImage() {
    this.image.nativeElement.click();
  }
  selectImage(image: any) {
    console.log(image);
  }
}
