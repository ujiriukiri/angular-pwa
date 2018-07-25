import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../service/data.service';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  orders: any = [];
  by_time: any = [];
  by_priority: any = [];
  by_distance: any = [];

  @Output() appInfoEvent = new EventEmitter<any>();
  app: any = {};
  app_info: any;

  constructor(
    private data: DataService,
    private appservice: AppService
  ) { }

  ngOnInit() {
    this.appservice.currentAppInfo.subscribe(app_info => (this.app_info = app_info));
    this.app = {
      title: 'Dispatch'
    };
    this.orders = this.data.getList();
    this.by_priority = this.orders.map((item) => {
      if (item.status === 1) {
        this.by_time.push(item);
      }
      if (item.status === 2) {
        this.by_distance.push(item);
      }
      if (item.status === 3) {
        this.by_priority.push(item);
      }
    });
  }

  changeAppInfo() {
    // console.log(this.app);
    this.app_info = {
      title: 'Dispatch App',
      user: {
        name: 'Mike Smith'
      }
    };
    console.log(this.app_info);
    this.appservice.updateAppInfo(this.app_info);
    // this.app = {
    //   title: 'Dispatch App'
    // };
    // console.log(this.app);
    // this.appInfoEvent.emit(this.app);
  }

}
