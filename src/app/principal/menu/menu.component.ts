import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public autentificacion:AutenticacionService) { }
  userLogin=false
  ngOnInit(): void {
    this.userLogin = this.autentificacion.isLoggedIn("")
    this.autentificacion.changeLoginStatus$.subscribe(
      (estado:boolean) => this.userLogin = estado
    )
  }
  logout(){
    this.autentificacion.logout()
  }

}
