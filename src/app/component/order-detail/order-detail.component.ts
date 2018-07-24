import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  app_info: any = {};
  order_id: Number;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.order_id = this.route.snapshot.params['id'];
    console.log(this.order_id);
    /* this.route.params.map(params => params['code']).subscribe(resp => {
      this.code = resp;
    }); */
    console.log(this.app_info);
    this.app_info = {
      title: 'Order Name'
    };
    // console.log(this.app_info);
  }
}
