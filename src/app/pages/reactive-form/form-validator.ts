import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidPersonName(control: FormControl): {[nameOfValidator: string]: boolean} {
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
