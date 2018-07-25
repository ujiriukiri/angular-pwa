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

  app: any;

  ngOnInit(): void {
    this.list = this.dataservice.getList();
    // console.log(this.list);
  }

  receiveInfo($event) {
    console.log($event);
    this.app = $event;
    console.log(this.app);
  }
}
