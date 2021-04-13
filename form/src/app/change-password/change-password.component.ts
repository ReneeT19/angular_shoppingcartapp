import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {
form: FormGroup;

constructor(fb: FormBuilder) {
  this.form = fb.group({
    oldPassword:['', 
  Validators.required,
  PasswordValidators.validOldPassword
],
    newPassword:['', Validators.required],
    confirmPassword:['', Validators.required]
  }, {
    validator: PasswordValidators.passwordShouldMatch
  });
}
  // form = new FormGroup({
  //   oldPassword: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3)
  //   ],PasswordValidators.validOldPassword),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', [
  //     Validators.required, 
  //     PasswordValidators.passwordShouldMatch])
  // });


  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
