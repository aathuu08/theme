import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeapiService } from '@shared/service/themeapi.service';
import { MessageService } from '@shared/service/messaging.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
 
})
export class SideBarComponent implements OnInit {
  categorylist: any;
  constructor(private router: Router,
     private themeapi: ThemeapiService,
     private messageservice: MessageService) {

     }

  ngOnInit() {
   this.categorylist = this.themeapi.getcategoryList().pipe();
   console.log(this.categorylist);
  }
  
  navigatelistpage(name){
  this.router.navigateByUrl('/theme/list/' + name);  
  this.messageservice.sendCategory(name);
}
}

