import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { PrivateRoutingModule } from './private-routing.module';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';

import { FormColectionComponent } from './components/form-collection/form-colection.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListColectionComponent } from './components/list-collection/list-colection.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    MainPageComponent,
    MainListComponent,
    MainCardsComponent,
    FormColectionComponent,
    FormProductComponent,
    ListColectionComponent,
    ListProductComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSidenavModule
    
  ]
})
export class PrivateModule { }
