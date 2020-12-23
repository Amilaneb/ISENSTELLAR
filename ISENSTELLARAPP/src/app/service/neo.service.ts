import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NeoService {


  constructor(private http: HttpClient) {
  }

  getasteroid(): Observable<any>{

    return this.http.get('http://www.neowsapp.com/rest/v1/feed/today?api_key=NB5VcgTbxAKiXcbjaMH4vaoepqSzMeKtBHlnbdZZ').pipe(
      map(value => 
      )
    );
  }
}
