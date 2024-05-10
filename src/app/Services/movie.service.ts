import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //Using httpClient to get the apis
  constructor(private httpClient:HttpClient) { }

  GetMonsterData():Observable<any>{
    return this.httpClient.get('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
  }

  GetEquipmentData():Observable<any>{
    return this.httpClient.get('https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment')
  }

  GetRegionData():Observable<any>{
    return this.httpClient.get('https://botw-compendium.herokuapp.com/api/v3/regions/all')
  }
}