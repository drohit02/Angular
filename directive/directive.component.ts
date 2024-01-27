import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  arr:number[] =[10,20,30,40,50];
  disableBtn : boolean= false;

  addEle(){
  var lastEle:number = this.arr[this.arr.length-1];
  var addEle :number = lastEle+10;
  this.arr.push(addEle);
  }
  removeEle()
  {
    if (this.arr.length > 5) {
      this.arr.pop();
    }
      if (this.arr.length === 1) {
        this.disableBtn = true;
    }
  }
}
