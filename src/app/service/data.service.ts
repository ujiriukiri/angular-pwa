import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList() {
    const data = [
      'hello', 'world'
    ];
    return data;
  }
}
