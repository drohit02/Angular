import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  str : string = "This is a String ";
  pi:number = 3.12342;

  newCurrency : number = 83 ;
  marks:number = 77;

  doj: Date = new Date(Date.now());

}
