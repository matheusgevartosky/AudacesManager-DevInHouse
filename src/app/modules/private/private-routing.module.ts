import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'painel', component: DashboardComponent,
    children:[

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
