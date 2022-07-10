import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Izone} from "../model/zone.interface";
import {IAbilities} from "../model/abilities.interface";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) { }

  public getZones(): Observable<Izone[]> {
    const tempUrlLocal = "assets/tempData/zones.json";
    return this.http.get<Izone[]>(tempUrlLocal);
  }

  public getAbilities(): Observable<IAbilities[]> {
    const tempUrlLocal = "assets/tempData/abilities.json";
    return this.http.get<IAbilities[]>(tempUrlLocal);
  }
}
