/* Objects Interfaces */
import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  user = {
    myName: '',
    myEmail: '',
    myPhone: ''
  };

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
    } else {
      console.log('Form is invalid');
    }
  }
}
