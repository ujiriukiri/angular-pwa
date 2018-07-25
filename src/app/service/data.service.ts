import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList() {
    const data = [
      {
        id: 1,
        order_id: 12345,
        item_name: 'Nike Flip Flop',
        contact_name: 'Tony Stark',
        due_time: '6:30 PM',
        status: 1,
        stops: [
          {
            address: 'Jack Daniels street',
            long: 1234567,
            lat: 1234678
          }
        ],
        comments: [
          {
            name: 'Tony Stark',
            comment: 'I\'ll be home in 5 mins, please wait for me',
            time: '5:32 PM'
          },
          {
            name: 'John Doe',
            comment: 'No problem!',
            time: '5:36 PM'
          },
        ],
      },
      {
        id: 2,
        order_id: 17819,
        item_name: 'Bucket Chicken',
        contact_name: 'Peter Parker',
        due_time: '6:50 PM',
        status: 1,
        stops: [
          {
            address: 'Remy Martins Rd',
            long: 1234567,
            lat: 1234678
          },
          {
            address: 'Red Label Crescent',
            long: 1234567,
            lat: 1234678
          }
        ],
        comments: [
          {
            name: 'Peter Parker',
            comment: 'Need \'em chicken to bulk up',
            time: '6:45 PM'
          }
        ],
      },
      {
        id: 3,
        order_id: 72187,
        item_name: '3 Tier wedding cake',
        contact_name: 'Wonder Woman',
        due_time: '8:00 AM',
        status: 1,
        stops: [
          {
            address: 'Eight PM Junction',
            long: 1234567,
            lat: 1234678
          }
        ],
        comments: [
          {
            name: 'John Doe',
            comment: 'I\'ll arrive 10mins after due time. Traffic Issues!',
            time: '7:47 AM'
          },
          {
            name: 'Wonder Woman',
            comment: 'Ok, Just make it o time for the wedding!',
            time: '5:36 PM'
          },
        ],
      },
      {
        id: 4,
        order_id: 32781,
        item_name: 'Claw Sharpner',
        contact_name: 'Wolverine',
        due_time: '02:00 AM',
        status: 1,
        stops: [
          {
            address: 'Johnnie Walker avenue',
            long: 1234567,
            lat: 1234678
          }
        ],
        comments: [],
      },
      {
        id: 5,
        order_id: 52923,
        item_name: 'New Face Mask',
        contact_name: 'Dead Pool',
        due_time: '9:00 AM',
        status: 3,
        stops: [
          {
            address: 'Alomo Bitters Close',
            long: 1234567,
            lat: 1234678
          }
        ],
        comments: [
          {
            name: 'Dead Pool',
            comment: 'i\'m ugly af, I need a face lift',
            time: '8:14 AM'
          },
          {
            name: 'John Doe',
            comment: 'You need a new life',
            time: '8:15 AM'
          },
        ],
      },
    ];
    return data;
  }
}
