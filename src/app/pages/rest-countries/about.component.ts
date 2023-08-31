import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import { ICountry } from 'src/app/util/type';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit  {

  allCountries$: Observable<ICountry[]> = this._dataService.getAllCountries();

  ngOnInit(){
    this.allCountries$.subscribe(console.log);
  }

  constructor(private _dataService: CountriesService){}

}
