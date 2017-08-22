import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from './shared/fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './login.guard';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  { path: '', redirectTo: '/form1', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'form1', component: Form1Component },
      { path: 'cards/:type', component: CardsComponent, canActivate: [LoginGuard] },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
