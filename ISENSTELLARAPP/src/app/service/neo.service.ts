import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class NeoService {

date = new Date();


  constructor(private http: HttpClient) {}

  getasteroid(): Observable<Object>{

    return this.http.get('http://www.neowsapp.com/rest/v1/feed/today?api_key=NB5VcgTbxAKiXcbjaMH4vaoepqSzMeKtBHlnbdZZ')
}
}
//.pipe(map((jsonArray: Array<object>) => {return jsonArray['near_earth_objects'][this.date];}))}
