import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      extra: new FormGroup({}),
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
}
