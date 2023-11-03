import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  @ViewChild('image') image: ElementRef;
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      person: new FormGroup({
        name: new FormControl(null, Validators.required),
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
      }),
    });
  }

  browseImage() {
    this.image.nativeElement.click();
  }
  selectImage(image: any) {
    console.log(image);
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
