import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  app_info_init = {
    title: 'Dispatch',
    user: {}
  };

  private APPINFO = new BehaviorSubject<any>(this.app_info_init);
  currentAppInfo = this.APPINFO.asObservable();

  constructor() {}

  updateAppInfo(app_info) {
    this.APPINFO.next(app_info);
  }
}
