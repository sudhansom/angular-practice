import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  Observable,
  debounceTime,
  fromEvent,
  map,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Subscription, of, concat } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-debounse-time',
  templateUrl: './debounse-time.component.html',
  styleUrls: ['./debounse-time.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebounseTimeComponent implements OnInit, AfterViewInit {
  subscription!: Subscription;
  result$: Observable<number>;

  projectForm: FormGroup;

  @ViewChild('myInput') myInput: ElementRef;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('critical'),
    });
  }
  onSaveProject() {
    console.log(this.projectForm.value);
  }
  makeSomeWords(word): Observable<string> {
    return of('You typed: ' + word);
  }
  ngAfterViewInit(): void {
    const abc$ = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((e) => e.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((item) => this.makeSomeWords(item)) // hit the search url here....
    );

    abc$.subscribe(console.log);
  }
}
