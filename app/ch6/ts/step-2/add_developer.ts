import {Host, Component, Directive} from '@angular/core';
import {NgControl, NgForm, FormsModule, NG_VALIDATORS} from '@angular/forms';
import {Developer} from './developer';
import {DeveloperCollection} from './developer_collection';

function validateEmail(emailControl) {
  if (!emailControl.value || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailControl.value)) {
    return null;
  } else {
    return { 'invalidEmail': true };
  }
}

@Component({
  selector: 'dev-add',
  templateUrl: './add_developer.html',
  styles: [
    `input.ng-touched.ng-invalid,
     select.ng-touched.ng-invalid {
      border: 1px solid red;
    }`
  ]
})
export class AddDeveloper {
  developer = new Developer();
  errorMessage: string;
  successMessage: string;
  submitted = false;
  technologies: string[] = [
    'JavaScript',
    'C',
    'C#',
    'Clojure'
  ];

  constructor(private developers: DeveloperCollection) {}
  
  addDeveloper() { }
}
