import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PrivateRoutingModule } from './private-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { DashListComponent } from './components/dash-list/dash-list.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    DashboardComponent,
    CardsComponent,
    DashListComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
