import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormColectionComponent } from './components/form-colection/form-colection.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListColectionComponent } from './components/list-colection/list-colection.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LayoutDashBoardComponent } from './layout-dash-board/layout-dash-board.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ColectionComponent } from './interfaces/colection/colection.component';


@NgModule({
  declarations: [
    MainPageComponent,
    MainListComponent,
    MainCardsComponent,
    FooterComponent,
    HeaderComponent,
    FormColectionComponent,
    FormProductComponent,
    ListColectionComponent,
    ListProductComponent,
    LayoutDashBoardComponent,
    DashboardComponent,
    MenuBarComponent,
    ColectionComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
