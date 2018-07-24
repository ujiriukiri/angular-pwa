import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  @Input() app_info: any;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.app_info = {
      title: 'Dispatch',
      user: {}
    };
  }

  openModal() {
    $('#exampleModal').modal('toggle');
  }

  ngOnInit() {
    console.log(this.app_info);
    this.app_info = {
      title: 'Dispatch App'
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['app_info']) {
      // this.handleSetUp(this.app_info);
      console.log(this.app_info);
    }
  }
}
