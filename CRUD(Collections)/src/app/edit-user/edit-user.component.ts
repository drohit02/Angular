import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  address:string[] = ['pune','nashik','mumbai','nagpur','other'];
  editId : any ;
  userData:any;
  constructor(private currentRoute:ActivatedRoute,private dataService:DataService){

  }

  ngOnInit(): void {
    this.currentRoute.paramMap.subscribe((res) => {
      this.editId = res.get('id');
      console.log("Edit ID:", this.editId);
      this.userData = this.dataService.getRecord(this.editId);
    });
  }
  
  editUser(userData:any){
    this.dataService.editRecord(this.editId,userData);
  }
}
