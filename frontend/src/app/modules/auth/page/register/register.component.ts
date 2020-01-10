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
  registerForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone,
   private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.mainForm();
  }

  mainForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      moblie: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ],
      password: ['', [Validators.required]]
    });
  } 
  // Getter to access form control
  get myForm(){
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registerForm.valid) {
      return false;
    } else {
      this.registerService.createSignup(this.registerForm.value).subscribe(
        (res) => {
          console.log('Signup successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/auth/login'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}