import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{


  public Countries: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region;


  constructor( private CountriesService: CountriesService ){}
  ngOnInit(): void {
    this.Countries = this.CountriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ): void{
    this.CountriesService.searchRegion( region )
    .subscribe( countries => {
      this.Countries = countries;
    })

    }
}
