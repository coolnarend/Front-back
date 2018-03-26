/* Objects Interfaces */
import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {

  fireEvent(e){
    //console.log('button clicked..');
    //console.log(greeting);
    //console.log(e.target.id);
    console.log(e.type);
  }

}
