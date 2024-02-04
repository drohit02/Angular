import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  studData: any;
  genderOptions: string[] = ["Male", "Female", "TransGender", "Prefer Not to say"];

  formData(val:any){
    console.log(val);
  }

  ngOnInit() 
  {
    this.studData = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('[a-z,A-Z]')]),
      email: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      selectedGender: new FormControl('',[Validators.required]),
      terms : new FormControl(false,[Validators.requiredTrue]) 
    });
  }

}

