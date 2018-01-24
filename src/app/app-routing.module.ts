import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  { path:'', redirectTo:'inicio',pathMatch:'full',},
  {path:'inicio',component:InicioComponent},
  {path:'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
