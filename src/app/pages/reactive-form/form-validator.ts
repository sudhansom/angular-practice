import { FormControl } from '@angular/forms';

export class CustomValidators {
  static invalidPersonName(control: FormControl): {[nameOfValidator: string]: boolean} {
    if(control.value === 'admin'){
      return {'invalidPersonName': true}
    }
    return null;
  }
}
