import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  products : any[] = [
    {id:101,name:"Mobile",price:32000},
    {id:102,name:"Iphone",price:35000},
    {id:103,name:"Computer",price:37000},
    {id:104,name:"Laptop",price:44000}
  ]
  constructor() { }
}
