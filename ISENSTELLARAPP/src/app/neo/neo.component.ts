import { Component, OnInit } from '@angular/core';
import { NeoService } from '../service/neo.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.css']
})
export class NeoComponent implements OnInit {

  items: any;

  today: Object;
  date = new Date();
  myDate: string

  constructor(private neo: NeoService, private dp: DatePipe) {
    this.myDate = this.dp.transform(this.date, 'yyyy-MM-dd')
   }

  ngOnInit(): void {
  this.neo.getasteroid().subscribe(value => this.items = value);

  }
}
//console.log(this.dp.transform(this.date, 'yyyy-MM-DD'))
