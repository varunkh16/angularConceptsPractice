import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  signUpForm!: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [this.forbiddenNames]),
      'email': new FormControl(null, { validators: [], asyncValidators: [this.forbiddenEmails] }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  onAddHobby() {
    const formControl = new FormControl(null);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl);
  }

  getHobbyControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  clearForm() {
    this.signUpForm.setValue({
      'username': "",
      'email': "",
      'gender': "",
      'hobbies': []
    });
  }

  forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {
    const p = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 500);
    });

    return p;
  }

  forbiddenNames(): {[s:string]: any} | null {
    return (control: FormControl): { [s: string]: boolean } | null => {
      if (['sharath', 'gangadhar'].indexOf(control.value)!=-1) {
        return { 'nameIsForbidden': true };
      }
      return null;
    };
  }
}
