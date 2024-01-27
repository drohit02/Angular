import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  disableInput:boolean=true

  changeState()
  {
    this.disableInput = !this.disableInput;
  }
}
