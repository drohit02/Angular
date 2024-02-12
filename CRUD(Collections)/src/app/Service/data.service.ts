import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  users : any[] = [
    {id:1 ,username:"virat",password:"kohli",address:"pune"},
    {id:2 ,username:"suresh",password:"raina",address:"nashik"},
    {id:3 ,username:"sachin",password:"master",address:"mumbai"}
  ]
  constructor(private currentRoute:ActivatedRoute,private route:Router) { 

  }
  ngOnInit(): void {
    
  }

  getRecords():any {
    return this.users;
  }
  
  getRecord(eid:any){
    const newid = parseInt(eid.toString(),10);
    return this.users.find(user=>user.id===newid);
  }

  addRecord(data:any){
    const lastEle = this.users[this.users.length-1];
    let lastId = lastEle.id;
  
    const newData = {id:++lastId,username:data.username,password:data.password,address:data.address}
    console.log(newData);
    if(this.users.push(newData)){
      this.route.navigate(['allUser']);
    }
  }

  deleteRecord(id:number) {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  editRecord(id:any,data:any){
    console.log(id);
    let eid = parseInt(id,10)
    const index = this.users.findIndex(u=>u.id===eid);
    
    if(this.users[index] = {id:eid,username:data.username,password:data.password,address:data.address}){
      this.route.navigate(['allUser']);
    }
    
  }
}
