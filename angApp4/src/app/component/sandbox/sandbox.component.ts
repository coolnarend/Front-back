/* Objects Interfaces */
import { Component } from '@angular/core';
import { Cust } from './customer';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  imageUrl:string = 'http://lorempixel.com/400/200';
  isUnchanged:boolean = true;
}
