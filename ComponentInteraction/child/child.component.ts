import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() parentData: any;
  @Output() emitterObj = new EventEmitter();

  sendMsg(val:any){
    this.emitterObj.emit(val);
  }
}
