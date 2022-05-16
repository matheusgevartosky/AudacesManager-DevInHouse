import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';

import { FormColectionComponent } from './components/form-collection/form-colection.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListColectionComponent } from './components/list-collection/list-colection.component';
import { ListProductComponent } from './components/list-product/list-product.component';



@NgModule({
  declarations: [
    MainPageComponent,
    MainListComponent,
    MainCardsComponent,
    FormColectionComponent,
    FormProductComponent,
    ListColectionComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
