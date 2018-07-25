import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  app_info: any = {};
  order_id: Number;
  order: any = {};

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit() {
    this.order_id = +this.route.snapshot.params['id'];
    console.log(this.order_id);
    this.order = this.data.getOrder(+this.order_id);
    if (this.order === false) {
      console.log('Order Not Found');
    } else {
      console.log(this.order);
    }
  }
}
