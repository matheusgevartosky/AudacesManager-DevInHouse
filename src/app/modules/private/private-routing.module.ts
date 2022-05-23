import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';
import { MainComponent } from './layout/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [

  {
    path:'main', component: MainComponent,
      children:[
        {path: 'painel', component: DashboardComponent},
        {path: 'colecao', component: CollectionMainComponent},
        {path: 'produtos', component: ProductMainComponent},
        {path: 'addColecao', component: CollectionFormComponent},
        {path: 'addProd', component: ProductFormComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
