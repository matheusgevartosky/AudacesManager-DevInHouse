import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [


  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'criar', component:SingupComponent},
  {path: 'recuperar', component: RecoverComponent},
  {path:'**', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
