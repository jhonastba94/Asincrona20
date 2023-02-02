import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, Users,Userounde } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  apiUser = environment.apiURL + "users/"
  apireto19 = environment.apireto19
  apireto20=environment.apireto20
  asincronaURL = environment.asincronaURL
  apiasincrona20 = environment.apiURL + "posts/"

  getUsersAll():Observable<Users>{
    return this.http.get<Users>(this.apiUser)
  }

  getUserId(userid:string):Observable<User>{
    const url = this.apiUser + userid
    return this.http.get<User>(url)
  }
  //post
  postUser(usuario: Userounde):Observable<User>{
    return this.http.post<User>(this.apiUser,usuario)
  }
  //getpara interceptor
  getUserAllInterceptor():Observable<any>{
    return this.http.get(this.apiUser,{observe:"response"})
  }
  getre20mostrar():Observable<any>{
    return this.http.get(this.apireto20,{observe:"response"})
  }
  getasincrona20():Observable<any>{
    return this.http.get(this.apiasincrona20,{observe:"response"})
  }
}
