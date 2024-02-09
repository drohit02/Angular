import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  employee = [
    {id:201,name:"Virat",address:"Delhi",salary:320000},
    {id:202,name:"Dhoni",address:"Pune",salary:220000},
    {id:203,name:"Raina",address:"Mumbai",salary:290000},
    {id:204,name:"Sachin",address:"Nashik",salary:431451},
  ]


  constructor() { }
}
