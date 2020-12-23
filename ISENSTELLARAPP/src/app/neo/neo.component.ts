import { Component, OnInit } from '@angular/core';
import { NeoService } from '../service/neo.service';
import { DatePipe } from '@angular/common';
import { Neo } from '../class/neo';


@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.css']
})
export class NeoComponent implements OnInit {

  items = new Array<Neo>();

  today: Object;
  myDate: string

  constructor(private neo: NeoService) {

   }

  ngOnInit(): void {
  this.neo.getasteroid().subscribe((value: Array<Neo>) => this.items = value);

  }
}
//console.log(this.dp.transform(this.date, 'yyyy-MM-DD'))
