import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

interface ICustomValidator {
  invalidPersonName : boolean
}

export class CustomValidators {
  static invalidPersonName(control: FormControl): ICustomValidator {
    if(control.value === 'admin'){
      return {'invalidPersonName': true}
    }
    return null;
  }

  static asyncInvalidPersonName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Admin'){
          resolve({'invalidPersonName': true})
        }else {
          resolve(null)
        }
      }, 2000)
    })
    return promise;
  }
}
