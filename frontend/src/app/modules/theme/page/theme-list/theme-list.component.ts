import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeapiService } from '@shared/service/themeapi.service';
import { ThemeList } from './theme-list';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themelist: any = [];

  constructor(private themeapiService: ThemeapiService) { 
    this.getList();
  }

  theme = new ThemeList();
  ngOnInit() { }

  getList(){
    this.themeapiService.getList().subscribe((data) => {
      console.log(data);
     this.themelist = data;
    })    
  }


  // tslint:disable-next-line:member-ordering
  themeslist = this.themeapiService.getList().pipe();

}
