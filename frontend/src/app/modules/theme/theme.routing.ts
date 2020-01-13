import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeListComponent } from './page/theme-list/theme-list.component';
import { ThemeComponent } from './page/theme.component';
import { ThemeCartComponent } from './page/theme-cart/theme-cart.component';
import { ThemeCheckoutComponent } from './page/theme-checkout/theme-checkout.component';
import { ThemeDetailsComponent } from './page/theme-details/theme-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: 'cart',
        component: ThemeCartComponent
      },
      {
        path: 'checkout',
        component: ThemeCheckoutComponent
      },
      {
        path: 'list/:category',
        component: ThemeListComponent
      },
      {
        path: 'details/:_id',
        component: ThemeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
