import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import {  CartService } from '@shared/service/cart.service';


@Component({
  selector: 'app-theme-cart',
  templateUrl: './theme-cart.component.html',
  styleUrls: ['./theme-cart.component.scss']
})
export class ThemeCartComponent implements OnInit {
  cartItem : any;
  objcart: any;
  cItem:any;
  subtotal:any;


  constructor(private cartservice: CartService,private ref: ChangeDetectorRef) {

//      this.cartItem = 
//     [
//       {id: '234324' , imageUrl:'',name: 'sdf',desc:'aaa', qty: 123,price:100,total:20, ds: 'asdsad'},
//      {id: '234' , imageUrl:'ff',name: 'sddff',desc:'aasasdaa', qty: 3,price:300,total:20, ds: 'asdrertsad'},
//      {id: '324' , imageUrl:'cdf',name: 'sdfdgfgf',desc:'adgtaa', qty: 23,price:500, total:20,ds: 'asdersad'},
//      {id: '343' , imageUrl:'f',name: 'sdgfghf',desc:'aadfdgtra', qty: 12,price:100,total:20, ds: 'asdersad'},
//     ] 

//     localStorage.setItem('cart', JSON.stringify(this.cartItem));
   
  }

  ngOnInit() {
    this.cartservice.findTotal();
    this.objcart= JSON.parse(localStorage.getItem("cart1"));
    this.subtotal = this.cartservice.subTotal();
  }

  deleteitem(deleteitemName) {
    console.log(deleteitemName);
    this.cartservice.removeById(deleteitemName);
    this.objcart = this.cartservice.getCart();
    this.cartservice.findTotal();
    this.subtotal = this.cartservice.subTotal();
    console.log("objcart",this.objcart);
    this.ref.markForCheck(); 

  }

  remove(item){
    this.cartservice.removeItem(item);
   
    this.objcart = this.cartservice.getCart();
    debugger;
    this.cartservice.findTotal();
    this.subtotal = this.cartservice.subTotal();
    console.log("cartItem",this.objcart);
    this.ref.markForCheck(); 
  }
  add(item){
    this.cartservice.addToCart(item);
    this.objcart = this.cartservice.getCart();
    this.cartservice.findTotal();
    this.subtotal = this.cartservice.subTotal();
    console.log("cartItem",this.objcart);
    this.ref.markForCheck(); 

    
  }

}
