import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]

})
export class MaterialComponentsModule { }
