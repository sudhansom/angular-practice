import { Observable } from "rxjs";

export function createObservables(){
    return new Observable(observer => {
        let count = 0;
        setInterval(()=>{
          count ++;
          if(count === 4){
            observer.complete();
          }
          if(count > 6){
            observer.error('failed...')
          }
          observer.next(count);
        }, 1000);
      });
  }
