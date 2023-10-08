import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription, of, concat } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-debounse-time',
  templateUrl: './debounse-time.component.html',
  styleUrls: ['./debounse-time.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebounseTimeComponent implements OnInit {
  subscription!: Subscription;
  result$: Observable<number>;

  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        CustomValidators.invalidProjectName,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('critical'),
    });
  }
  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
