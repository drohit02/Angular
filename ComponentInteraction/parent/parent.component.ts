import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data :string = "";
  receivedVal:any ;

  sendMsg(value:any){
    this.data = value;
  }
  childData(val:any){
    this.receivedVal = val;
  }


}
