import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit{

  userData :any;
  constructor(private dataService:DataService){

  }

  ngOnInit(): void {
    this.userData = this.dataService.getRecords();

  }
  deleteUser(id:any){
    console.log("deleting user",id)
    this.dataService.deleteRecord(id);
  }

}
