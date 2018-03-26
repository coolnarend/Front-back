/* Objects Interfaces */
import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  birthday = new Date(1988, 7, 4);
  total = 500;
  fee = 10;
  per = 1;
}
