import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-form',
  templateUrl: './form-builder-form.component.html',
  styleUrls: ['./form-builder-form.component.css']
})
export class FormBuilderFormComponent implements OnInit {

  registrationData :any ;
  courses :string[] = ["Java","Python","MEAN","MERN"];
  genders : string[] = ["Male","Female","TransGender","Prefer Not To say"];

  constructor(private myFormBuilder : FormBuilder){

  }

  ngOnInit(){
    this.registrationData = this.myFormBuilder.group(
      {
        firstName : ['',[Validators.required]],
        lastName : ['',[Validators.required]],
        email : ['',[Validators.required]],
        selectedCourse : ['',[Validators.required]],
        selectedGender : ['',[Validators.required]],
        number : ['',[Validators.required]],
        terms : ['',[Validators.requiredTrue]]
      }
      
      
    );
  }
  formSubmitted(){

  }
}
