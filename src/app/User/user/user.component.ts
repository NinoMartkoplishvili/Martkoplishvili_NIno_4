import { Component, EventEmitter, Output } from '@angular/core';
import { ChildUser } from 'src/app/child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Output() onChildDataReceived : EventEmitter<any>= new EventEmitter();
  users: ChildUser[] = [
    { 
      id: 1, 
      firstname: 'jora',
      lastname: 'kamkamidze', 
      dateOfBirth: '12/12/56',
      phoneNumber: '555 490 210', 
      email: 'jora@gmail.com' 
      },
      { 
       id: 2,
      firstname: 'manana',
      lastname: 'kamkamidze', 
      dateOfBirth: '12/10/73',
      phoneNumber: '555 789 210', 
      email: 'manana@gmail.com' 
  },
];
childUsers: any;

sendData() {
  this.onChildDataReceived.emit(this.users);
}}
