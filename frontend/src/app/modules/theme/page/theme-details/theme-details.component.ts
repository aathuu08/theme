import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeapiService } from '@shared/service/themeapi.service';
import { CartService } from '@shared/service/cart.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ThemeDetailsComponent implements OnInit {


 
    themeDetails: string;
    details: any;
    id: string;
    
    constructor(private route: ActivatedRoute, 
    private router: Router,
    private cartservice: CartService,
    private themeapiService: ThemeapiService,
    private ref: ChangeDetectorRef) { 
   
    }
    
    ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
    console.log(params.get('_id'));
    this.id = params.get('_id');
    });
    
    this.loadDetails(this.id);
    
    }
    loadDetails(id)
    {
    this.themeapiService.getthemeDetails(id).subscribe(
    (result) => {
    this.details = result;
    console.log(result);
    this.ref.markForCheck();
    }
    )
    }
    addToCart(item){
      console.log(item)
      this.cartservice.addToCart(item);
    }
}

