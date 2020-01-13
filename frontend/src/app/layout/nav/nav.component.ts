import { Component, OnInit } from '@angular/core';

import { environment } from '@env';
import { Observable } from 'rxjs';
import { ThemeService } from 'app/core/service/theme.service';
import { ThemeapiService } from '@shared/service/themeapi.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private themeapiservice:ThemeapiService) {}

  ngOnInit() {}

  logout(){
    this.themeapiservice.Logout();
  }
}
