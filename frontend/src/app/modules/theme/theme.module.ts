import { NgModule } from '@angular/core';

import { ThemeComponent } from './page/theme.component';
import { ThemeRoutingModule } from './theme.routing';

import { SharedModule } from '@shared/shared.module';
import { ThemeDetailsComponent } from './page/theme-details/theme-details.component';
import { ThemeCheckoutComponent } from './page/theme-checkout/theme-checkout.component';
import { ThemeCartComponent } from './page/theme-cart/theme-cart.component';
import { ThemeListComponent } from './page/theme-list/theme-list.component';
import { SideBarComponent } from 'app/layout/sidebar/sidebar.component';
import { NavComponent } from 'app/layout/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ThemeComponent,
    ThemeCartComponent,
    ThemeListComponent,
    ThemeDetailsComponent,
    ThemeCheckoutComponent,
    SideBarComponent
  ],
  imports: [SharedModule, ThemeRoutingModule,ReactiveFormsModule],
 
})
export class ThemeModule {}
