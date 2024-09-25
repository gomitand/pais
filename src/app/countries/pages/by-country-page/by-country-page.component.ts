import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public Countries: Country[] = [];
  public initialValue: string ='';

  constructor( private CountriesService: CountriesService ){}
  ngOnInit(): void {
    this.Countries = this.CountriesService.cacheStore.byCountries.countries;
    this.initialValue = this.CountriesService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ): void{
    this.CountriesService.searchCountry( term )
    .subscribe( countries => {
      this.Countries = countries;
    })

    }

}
