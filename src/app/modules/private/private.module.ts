import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material/material-components/material-components.module';


import { PrivateRoutingModule } from './private-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
