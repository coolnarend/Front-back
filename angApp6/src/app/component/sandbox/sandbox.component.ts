/* Objects Interfaces */
import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  isSpecial = true;
  canSave = true;
  currentStyles = {};

  constructor() {
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    this.currentStyles= {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '24px' : '14px'
    };
  }

}
