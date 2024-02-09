import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/Services/MyService/my.service';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit{

  myProducts:any;
  constructor(private productService : MyService){

  }
  ngOnInit(){
    this.myProducts = this.productService.products;
  }

}
