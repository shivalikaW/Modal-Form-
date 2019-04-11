import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ChangePassComponent } from './change-pass/change-pass.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
 
  {path:'change',component:ChangePassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
