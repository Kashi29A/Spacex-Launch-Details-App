import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';
const base_url = "https://api.spacexdata.com/v3/launches"
@Injectable({
  providedIn: 'root'
})
export class MissionServiceService {
 
  constructor(private http: HttpClient) { }

  getLaunchDetails(args: any): Observable<any>{
   return this.http.get(base_url,{params : args});
  }
}
