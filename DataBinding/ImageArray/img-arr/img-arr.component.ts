import { Component, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-img-arr',
  templateUrl: './img-arr.component.html',
  styleUrls: ['./img-arr.component.css']
})

export class ImgArrComponent {

  images = [ 
    "../../../../assets/dog.jpg",
    "../../../../assets/grass.jpg",
    "../../../../assets/man.jpg",
    "../../../../assets/moutain.jpg",
    "../../../../assets/sunset.jpg" 
  ];

  imgPath: string = this.images[0];
  disableBtnFr: boolean = true;
  disableBtnBw: boolean = false;  // Corrected the initial state of disableBtnBw
  
  backwardImg() {
    const currentIndex = this.images.indexOf(this.imgPath);

    if (currentIndex > 0) {
      this.imgPath = this.images[currentIndex - 1];
      this.disableBtnBw = false;
    }
    this.disableBtnFr = currentIndex === 1;
  }

  forwardImg() {
    const currentIndex = this.images.indexOf(this.imgPath);

    if (currentIndex < this.images.length - 1) {
      this.imgPath = this.images[currentIndex + 1];
      this.disableBtnFr = false;
    }
    this.disableBtnBw = currentIndex === this.images.length - 2;
  }
}
