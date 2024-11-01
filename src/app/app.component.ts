import { Component } from '@angular/core';
import { ChildUser } from './child-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MN4';


  childData: any;
  
  onChildDataReceived(data: any) {
    console.log(data);
    this.childData= data;
  }
}
