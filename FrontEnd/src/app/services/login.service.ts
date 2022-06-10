import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl : string;
  myApiUrl : string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Login';
   }
   login(usuario: Usuario):Observable<any>{
     return this.http.post(this.myAppUrl+this.myApiUrl,usuario)
   }
   setLocalStorage(data: string):void{
     localStorage.setItem('token',data);
   }
   getTokenDecoded():any{
     const helper = new JwtHelperService();
     let tkn:string = localStorage.getItem('token')!;
     const decodedToken =  helper.decodeToken(tkn);
     return decodedToken;
   }
//   getNameUser(): string|null{
//     return localStorage.getItem('NameUser');
//   }

   removeLocalStorage():void{
     localStorage.removeItem('token');
   }
}
