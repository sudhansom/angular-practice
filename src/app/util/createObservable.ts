import { Observable } from "rxjs";

export function createObservables(){
    return new Observable(observer => {
        fetch('http://localhost:9001/courses')
        .then(response => {
            return response.json()
        })
        .then(data => {
            observer.next(data);
            observer.complete();

        })
        .catch(err => observer.error(err))
      });
  }
