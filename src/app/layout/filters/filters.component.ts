import { Component, OnInit } from '@angular/core';
import {Izone} from "./model/zone.interface";
import {FilterService} from "./service/filter.service";
import {IAbilities} from "./model/abilities.interface";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  zones: Izone[] = [];
  abilities: IAbilities[] = [];
  selectedAbilities?: string[];
  selectedZones?: string[];
  onlyProf?: boolean;
  onlyOffers?: boolean;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.getZones();
    this.getAbilities();
  }


  private getZones() {
    this.filterService.getZones().subscribe({
      next: ((allZones: any) => {this.zones = allZones}),
      error: (err => {console.log(err)})
    })
  }

  private getAbilities() {
    this.filterService.getAbilities().subscribe({
      next: ((allAbilities: any) => {this.abilities = allAbilities}),
      error: (err => {console.log(err)})
    })
  }
}
