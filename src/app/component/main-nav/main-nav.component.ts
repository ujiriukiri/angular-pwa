import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../../service/app.service';

declare var $: any;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnChanges {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  @Input() app: any;
  app_info: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appservice: AppService
  ) {
    this.app = {
      title: 'Dispatch',
      user: {}
    };
  }

  openModal() {
    $('#exampleModal').modal('toggle');
  }

  ngOnInit() {
    console.log(this.app);
    this.appservice.currentAppInfo.subscribe(app_info => this.app_info = app_info);
    this.app = {
      title: 'Dispatch'
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['app']) {
      // this.handleSetUp(this.app);
      console.log(this.app);
    }
  }
}
