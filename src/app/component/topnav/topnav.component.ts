import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
    const sidebar = $('#sidebar-toggle');
    if ($('#sidebar-toggle').hasClass('open')) {
      sidebar.removeClass('open').addClass('close');
    } else {
      sidebar.removeClass('close').addClass('open');
    }
  }

}
