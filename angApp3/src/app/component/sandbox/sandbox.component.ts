/* Objects Interfaces */
import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
   present:string = 'Tom Holt is present.';
   absent:string = 'Tom Holt is absent.';
   conditionFlag:boolean = true;
   greeting:number = 4;
}
