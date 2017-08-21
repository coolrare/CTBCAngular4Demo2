import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {fallbackRoute} from './shared/fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FlotComponent } from './charts/flot/flot.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'charts',
   children: [
    {path: 'flot', component: FlotComponent}
   ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
