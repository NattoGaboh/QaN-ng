import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myAppUrl: string;
  myApiUrl: string;
  
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/User';
   }
  httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
   }
  saveUser(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, JSON.stringify(usuario), this.httpOptions);
  } 

  changePassword(changePassword: any):Observable<any>{
    return this.http.put(this.myAppUrl+this.myApiUrl+'/CambiarPassword',changePassword);
  }
}
