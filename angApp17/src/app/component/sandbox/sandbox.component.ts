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

  users: any[];
  user = {
    name: '',
    email: '',
    phone: ''
  };


  constructor(public dataService: DataService) {
    this.dataService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    });
  }

  onSubmit() {
    this.dataService.addUser(this.user).subscribe(user => {
      /*
      push() adds to the end and unshift() adds to the begining
      */
      console.log(user);
      this.users.unshift(user);
      this.user.name = '';
      this.user.email = '';
      this.user.phone = '';
    });
  }

}




