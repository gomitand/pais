import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [

  ]
})
export class ByCapitalPageComponent {

  public Countries: Country[] = [];

  constructor( private CountriesService: CountriesService ){}

  searchByCapital( term: string ): void{
    this.CountriesService.searchCapital( term )
    .subscribe( countries => {
      this.Countries = countries;

    })

    }

    }





