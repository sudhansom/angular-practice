import { Observable } from "rxjs";

export function createObservables(url: string){
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
