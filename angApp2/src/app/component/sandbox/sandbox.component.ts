/* Objects Interfaces */
import { Component } from '@angular/core';
import { peopletype } from './people';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {

  people = ['Rick', 'Peter', 'Tom'];

  people2: peopletype[];

  // customers: Cust[];
  constructor() {

    this.people2 = [
      {
        fistname: 'Rick',
        lastname: 'Holt',
        email: 'rick@mail.com',
        dob: 22
      },
      {
        fistname: 'Peter',
        lastname: 'Will',
        email: 'pet@mail.com',
        dob: 12
      },
      {
        fistname: 'Tom',
        lastname: 'Kon',
        email: 'tom@mail.com',
        dob: 9
      }
    ];

    this.people2[1].fistname = 'Peter 2';

    /*
    this.customer = {
      id: 22,
      name: 'Pete Williams',
      email: 'pet@mail.com'
    };

    this.customers = [
      {
        id: 1,
        name: 'Pete Williams',
        email: 'pet@mail.com'
      },
      {
        id: 2,
        name: 'Pete Williams',
        email: 'pet@mail.com'
      },
      {
        id: 3,
        name: 'Pete Williams',
        email: 'pet@mail.com'
      }
    ];
     */

  }
}

/*
Adding types to properties

import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  template: `
    <h1>Hello {{name}},
    age is {{age}},
    city is {{ city }},
    numbes are {{ myNumbers }},
    text are {{myTexts}},
    text any are {{myTextAny}},
    tuple are {{Tuple}},
    unusable are {{unusable}}.</h1>
  `
})
export class SandboxComponent {
  name: string = 'John Doe';
  age: number = 22;
  hasChildren: boolean = true;
  city: any = 'Boston';
  myNumbers: number[] = [2, 5, 3, 2];
  myTexts: string[] = ['a', 'b', 'c'];
  myTextAny: any[] = ['a', 'b', 5];
  Tuple: [string, number] = ['a', 5];
  unusable: void = undefined;
  u: undefined = undefined;
  n: null = null;

  constructor() {
    this.hasChildren = false;
    this.city = 'Jamaica';
    this.myNumbers = [1, 2, 3];
    this.myTexts = ['d', 'e'];
    this.myTextAny = [2, 6, 'd', 'e'];
    this.Tuple = ['sss', 9, 10];
  }
}
*/

/*

Data binding string interpolation

import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  template: `
    <h1>{{name}} is {{ age }} years old.</h1>
    <p>{{ fullname() }} is {{name}}'s Son.</p>
    <ul>
      <li>Name is {{ fullname() }}</li>
      <li>Son of {{ name }} who's age is {{ showAge() }}</li>
    </ul>
  `
})
export class SandboxComponent {
  name = 'John Doe';
  age = 45;
  person = {
    fname: 'Steve',
    lname: 'Doe'
  };
  constructor() {
    this.person.fname = 'Peter';
    this.hasBirthday();
  }
  fullname() {
    return this.person.fname + ' ' + this.person.lname;
  }
  hasBirthday() {
    this.age += 1;
  }
  showAge() {
    return this.age;
  }

}

*/
