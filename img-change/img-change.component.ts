import { Component } from '@angular/core';

@Component({
  selector: 'app-img-change',
  templateUrl: './img-change.component.html',
  styleUrls: ['./img-change.component.css']
})
export class ImgChangeComponent {

  imgPath1 : string ="../../../assets/bee.jpeg";
  imgName1 : string = "Bee";

  imgPath2 : string ="../../../assets/mountain.jpeg";
  imgName2 : string = "Mounntain";

  imgPath :string = "../../../assets/bee.jpeg";
  imgName : string = "Bee";
  changeImg : boolean = true ;

   switchImg():void {

    this.changeImg =!this.changeImg;
    
    if(this.changeImg===true){
      this.imgPath = this.imgPath1;
      this.imgName = this.imgName1;
    }
    else{
      this.imgPath = this.imgPath2;
      this.imgName = this.imgName2;
    }
  }
}
