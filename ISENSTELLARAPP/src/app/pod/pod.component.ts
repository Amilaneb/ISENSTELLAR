import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.css']
})
export class PodComponent implements OnInit {

  items = new Array<any>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://api.nasa.gov/planetary/apod?api_key=NB5VcgTbxAKiXcbjaMH4vaoepqSzMeKtBHlnbdZZ')
    .subscribe((value: Array<any>) => this.items = value);
  }

}
