import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import { AuthService } from './authentication/auth.service';
// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { HOST } from '../constant/host.service';
import { PATH } from '../constant/path.service';
import { PROTOCOL } from '../constant/http.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CreateHttpHeader {
  host: string = HOST;
  path: string = PATH;
  protocol: string = PROTOCOL;

  hostPath: string = this.protocol + this.host + '/' + this.path + '/';
  constructor(
    private http: Http
      // private authenticateservice: AuthService,
      // private errorpopup: ErrorPopUp
    ) { }

  addHeader() {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticateservice.getTokenInfo() });
    const headers = new Headers({ Authorization: 'Bearer ' });
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  get(url) {
    const requestInfo = this.http.get(this.hostPath + url, this.addHeader());
    return this.mapRequest(requestInfo);
  }

  post(url, body) {
    const requestInfo = this.http.post(
      this.hostPath + url,
      body,
      this.addHeader()
    );
    return this.mapRequest(requestInfo);
  }

  put(url, body, id) {
    const requestInfo = this.http.put(
      this.hostPath + url + '/' + id,
      body,
      this.addHeader()
    );
    return this.mapRequest(requestInfo);
  }

  delete(url, id) {
    const requestInfo = this.http.delete(
      this.hostPath + url + '/' + id,
      this.addHeader()
    );
    return this.mapRequest(requestInfo);
  }

  mapRequest(request) {
    return request
      .map(response => {
        // this.authenticateservice.authErrorHandler(response.json());
        // console.log(response.json());
        return response.json();
      })
      .share()
      .catch((error: any) => {
        // this.errorpopup.displayError();
        // console.log(error);
        return Observable.throw(error.status || 'NO INTERNET CONNECTION');
      });
  }
}
