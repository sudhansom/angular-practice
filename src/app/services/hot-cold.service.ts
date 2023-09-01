import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HotColdService {

    constructor(private _http: HttpClient){}

    getUsers(): Observable<{id: number, name: string}>{
        return this._http.get<{id: number, name: string}>('https://random-data-api.com/api/name/random_name');
    }

}
