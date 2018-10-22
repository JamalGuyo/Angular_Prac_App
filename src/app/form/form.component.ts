import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  rFormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    pwd: new FormControl('')
  });

  // get email(){
  //   return this.rFormGroup.get('email');
  // }

  // emailValue = this.rFormGroup.value;

  // updateValue() {
  //   this.rFormGroup.setValue('jamal@somn');
  // }

  log(x, y) {
    console.log(x, y);
  }
}
