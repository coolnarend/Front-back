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

  sata: any[] = [];

  constructor(public dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      // console.log(data);
      this.sata.push(data);
    });
  }
}
