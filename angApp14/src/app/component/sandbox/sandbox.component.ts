/* Objects Interfaces */
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

/*
We can bring the services in any component
injected as dependency and the use it..
*/

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  users: string[];
  constructor(public dataService: DataService) {
    this.users = this.dataService.getUsers();
    // console.log(this.dataService.getUsers());
  }
}
