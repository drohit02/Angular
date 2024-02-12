import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  address :string[] = ['pune','nashik','mumbai','nagpur','other'];

  constructor(private dataService:DataService){

  }

  addUser(userData:any){
    this.dataService.addRecord(userData);
  }

}
