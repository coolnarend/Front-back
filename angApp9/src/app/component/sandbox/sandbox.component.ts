/* Objects Interfaces */
import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {

  text:string = 'Hello World';
  value:boolean = true;

  changeValue() {
    // this.text = 'Good bye World';
    // this.value = false;
    this.value = !this.value;
  }

}
