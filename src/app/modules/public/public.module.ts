import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { RecoverComponent } from './components/recover/recover.component';


@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    RecoverComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
