import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-variable',
  templateUrl: './reference-variable.component.html',
  styleUrls: ['./reference-variable.component.css']
})
export class ReferenceVariableComponent {

  msg : string  = "";
  handleMsg(gettingValue:any)
  {
    alert(this.msg = gettingValue );
  }

}
