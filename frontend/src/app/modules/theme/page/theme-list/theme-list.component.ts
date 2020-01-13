import { Component, OnInit, NgZone, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemeapiService } from '@shared/service/themeapi.service';
import { ThemeList } from './theme-list';
import { CartService } from '@shared/service/cart.service';
import { MessageService } from '@shared/service/messaging.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit, OnDestroy{
 
  themelist:any;
  cateName:any;
  subscription: Subscription;
  theme: any;
  category: any;


  constructor(private themeapiService: ThemeapiService, 
    private cartservice:CartService,
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
     private messageservice: MessageService, 
     private ref: ChangeDetectorRef
     ) { 

      this.subscription = this.messageservice.getCategory().subscribe(message => {

        alert(message.text);
        this.themelist =  this.themeapiService.getItemsWithCategory(message.text).pipe();
        this.ref.markForCheck();
        console.log(message);
      });
    }


  ngOnInit() { 

  this.activatedRoute.paramMap.subscribe(params => {
    console.log(params.get('category'));
    this.cateName = params.get('category');
  });
  this.ref.markForCheck();

  this.themelist = this.themeapiService.getList().pipe();
}
  addToCart(item){
    window.alert("Item added to cart. Please visit cart page to place the order")
    console.log(item)
    this.cartservice.addToCart(item);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
