import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/DemoService/demo.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.css']
})
export class DemoServiceComponent {

  employeeList :any;

  constructor(private empService : DemoService){

  }
  ngOnInit(){
    this.employeeList = this.empService.employee;
  }

}
