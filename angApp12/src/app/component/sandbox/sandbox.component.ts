/* Objects Interfaces */
import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  myName:string = '';
  users:string[] = [
    'John Doe',
    'Mary Kom',
    'Tom Holt'
  ];

  onSubmit() {
    // console.log('Form submitted here..' + this.myName)
    this.users.push(this.myName);
    this.myName = '';
  }
}
