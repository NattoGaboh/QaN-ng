import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Questionnaire } from '../models/questionnaire'
import { Url } from 'url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Cuestionario';
   }

   guardarCuestionario(cuestionario: Questionnaire): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, cuestionario);
   }
}
