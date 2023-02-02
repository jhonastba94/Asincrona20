import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Asincrona20Component } from './principal/asincrona20/asincrona20.component';
import { CanactivateGuard } from './canactivate.guard';
import { LoginComponent } from './principal/login/login.component';

const routes: Routes = [
  {path:"asin20",component:Asincrona20Component,canActivate: [CanactivateGuard]},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
