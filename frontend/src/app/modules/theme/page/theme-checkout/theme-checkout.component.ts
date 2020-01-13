import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '@shared/service/cart.service.ts'
@Component({
  selector: 'app-theme-checkout',
  templateUrl: './theme-checkout.component.html',
  styleUrls: ['./theme-checkout.component.scss']
})
export class ThemeCheckoutComponent implements OnInit{
  
  
 userLogin = false;
 checkoutForm: FormGroup;
 submitted = false;
 items:any;
 subtotal:any;

 constructor(
  private router:Router,
  private formBuilder: FormBuilder,
  private cartservice:CartService
  )
  {this.mainForm();}

  ngOnInit(){

  }

  mainForm(){
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      cardNo: ['', Validators.required],
      cardExp: ['', Validators.required],
      cardCVV: ['', Validators.required]
      
  });


  }
  get f() { return this.checkoutForm.controls; }
  cart(){
    this.router.navigate(['/theme/cart']);
  }

  home(){
    this.router.navigate(['/auth/home']);
  }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
        return;
    }

    else{
      localStorage.clear();
      window.alert('Your order has been placed. Your item will be delievered soon.\n Keep purchasing') ;
      this.router.navigate(['/auth/home']);
    }


}
}
