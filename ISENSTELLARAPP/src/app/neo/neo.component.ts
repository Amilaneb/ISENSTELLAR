import { Component, OnInit } from '@angular/core';
import { NeoService } from '../service/neo.service';


@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.css']
})
export class NeoComponent implements OnInit {

  item: any;

  today: Object;

  constructor(private neo: NeoService) { }

  ngOnInit(): void {
   this.today = this.neo.getasteroid().subscribe(value => console.log(value));

  }
}
