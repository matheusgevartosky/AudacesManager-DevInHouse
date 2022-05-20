import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PrivateRoutingModule } from './private-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { DashListComponent } from './components/dash-list/dash-list.component';
import { MainComponent } from './layout/main/main.component';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    DashboardComponent,
    CardsComponent,
    DashListComponent,
    MainComponent,
    CollectionMainComponent,
    CollectionFormComponent,
    ProductMainComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
