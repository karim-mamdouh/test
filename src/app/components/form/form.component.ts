import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputErrors, GeneralItem } from 'cic-package-test';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup = this._fb.group({
    firstName: [, [Validators.required]],
    lastName: [, [Validators.minLength(3)]],
    email: [, [Validators.email]],
    gender: [, [Validators.required]],
    dob: [, [Validators.required]],
    address: [, [Validators.required]],
  });
  constructor(private _fb: FormBuilder) {}
  errors: FormInputErrors = {
    email: 'Wrong email format',
    minlength: 'Minimum length is 5',
    required: 'This field is required',
  };
  genders: Array<GeneralItem> = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
  ];
  onSubmit() {
    if (this.form.status === 'INVALID') {
      this.form.markAllAsTouched();
    } else {
      console.log(this.form.value);
    }
  }
}
