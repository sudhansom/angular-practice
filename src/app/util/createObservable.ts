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

  export function createObservablesCountry(name: string) : Observable<any>{
    return new Observable(observer => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
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
