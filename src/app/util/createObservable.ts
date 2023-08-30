import { Observable } from "rxjs";

import { Course } from "./type";

export function createObservables(url: string) : Observable<Course[]>{
    return new Observable(observer => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            observer.next(data['payload']);
            observer.complete();

        })
        .catch(err => observer.error(err))
      });
  }

  export function createObservablesCountry(url: string) : Observable<any>{
    return new Observable(observer => {
        fetch(url)
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
