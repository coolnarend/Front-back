import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  // users: string [];
  users: Array<string>;

  constructor() {
    this.users = [
      'Mark', 'Tom', 'Merry', 'Kerry', 'Jimmy', 'Harry'
    ];
  }

  getUsers() {
    return this.users;
  }

}
