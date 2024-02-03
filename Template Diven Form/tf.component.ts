import { Component } from '@angular/core';

@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent {
  gender :string[] =["Male","Female","Trans-Gender","Prefer Not to Say"];

  enquiryForm(enquiryFormData:any){
    console.log(enquiryFormData.value);
  }
}
