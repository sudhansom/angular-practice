import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { CustomValidators } from './form-validator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  myForm: FormGroup;
  imagePreview: any;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      person: new FormGroup({
        name: new FormControl(null, [Validators.required, CustomValidators.invalidPersonName], CustomValidators.asyncInvalidPersonName),
        dob: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        gender: new FormControl(null, Validators.required),
        experience: new FormControl(0),
        image: new FormControl(null),
      }),
      extra: new FormGroup({
        course: new FormControl('java', Validators.required),
        fruits: new FormArray([]),
        color: new FormControl(null),
        detail: new FormControl(null),
      }),
    });
  }
  selectImage(event: Event) {
    const image = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({ person: { image: image } });
    this.myForm.get('person.image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(image);
  }
  submitForm() {
    console.log(this.myForm.value);
  }

  saveOptions(value: any) {
    if (!this.myForm.value.extra.fruits.includes(value.target.defaultValue)) {
      this.myForm.value.extra.fruits.push(value.target.defaultValue);
    } else {
      this.myForm.value.extra.fruits = this.myForm.value.extra.fruits.filter(
        (item: string) => item !== value.target.defaultValue
      );
    }
  }
}
