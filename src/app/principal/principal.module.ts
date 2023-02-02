import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserintersectorService } from '../services/userintersector.service';
import { Asincrona20Component } from './asincrona20/asincrona20.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    Asincrona20Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    MenuComponent,
    Asincrona20Component,
    LoginComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserintersectorService,
      multi: true
    }
  ]
})
export class PrincipalModule { }
