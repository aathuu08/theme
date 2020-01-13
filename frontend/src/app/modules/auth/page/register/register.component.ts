import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from '@app/service/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone,
   private registerService: RegisterService
  ) 
  { this.mainForm();}

  ngOnInit() {
   
  }

  mainForm() {
    this.signupForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // address: ['', [Validators.required]],
      //phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  // Getter to access form control
  get myForm() {
    return this.signupForm.controls;
  }

  register() {
    this.submitted = true;
    if (!this.signupForm.valid) {
      return false;
    } else {
      this.registerService.createUser(this.signupForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
          this.ngZone.run(() => this.router.navigate(['login']))
        }, (error) => {
          console.log(error);
        });
    }
  }
}