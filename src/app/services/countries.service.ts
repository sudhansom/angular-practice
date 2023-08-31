import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ICountry } from "../util/type";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    private url = 'https://restcountries.com/v3.1/all';

    getAllCountries(): Observable<ICountry[]>{
        return this._http.get<ICountry[]>(this.url);
    }

    constructor(private _http: HttpClient){}

}
