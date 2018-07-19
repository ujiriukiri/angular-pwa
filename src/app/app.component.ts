import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataservice: DataService) { }

  list: any = [];

  ngOnInit(): void {
    this.list = this.dataservice.getList();
    console.log(this.list);
  }
}
