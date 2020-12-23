import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Neo } from '../class/neo';


@Injectable({
  providedIn: 'root'
})
export class NeoService {

date = new Date();
newDate: string;

  constructor(private http: HttpClient, private dp: DatePipe) {
    this.newDate = this.dp.transform(this.date, 'yyyy-MM-dd')
  }

  getasteroid(): Observable<Array<Neo>>{

    return this.http.get('http://www.neowsapp.com/rest/v1/feed/today?api_key=NB5VcgTbxAKiXcbjaMH4vaoepqSzMeKtBHlnbdZZ').pipe(

      map((objson: Object) =>
        objson['near_earth_object'][this.newDate].map((arrayJson: Array<object>) =>
        arrayJson.map(
          (itemJson: object) => new Neo(
            itemJson['name'],
            itemJson['estimated_diameter']['kilometers']['estimated_diameter_max'] ,
            itemJson['miss_distance']['kilometers'])))));
}
}
//.pipe(map((jsonArray: Array<object>) => {return jsonArray['near_earth_objects'][this.date];}))}
//http://www.neowsapp.com/rest/v1/feed/today?api_key=NB5VcgTbxAKiXcbjaMH4vaoepqSzMeKtBHlnbdZZ
