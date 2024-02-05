import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-reactive-form',
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.css']
})
export class DynamicReactiveFormComponent implements OnInit {

  registrationData: any;
  courses: string[] = ["Java", "Python", "MEAN", "MERN", "Testing"];

  ngOnInit() {
    this.registrationData = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      selectedCourse: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required]),
      offlineMode: new FormControl(''),
      onlineMode: new FormControl('')
    });
  }

  dataRegistered(val: any) {
    console.log(val.valid);
  }

  onSelectedMode(mode: string) {
    console.log(mode);

    let offlineModeValidators = this.registrationData.get('offlineMode');
    let onlineModeValidators = this.registrationData.get('onlineMode');

    if (mode === "offline") {
      onlineModeValidators.clearValidators();
      offlineModeValidators.setValidators(Validators.required);
    } else {
      offlineModeValidators.clearValidators();
      onlineModeValidators.setValidators(Validators.required);
    }

    onlineModeValidators.updateValueAndValidity();
    offlineModeValidators.updateValueAndValidity();
  }
}
