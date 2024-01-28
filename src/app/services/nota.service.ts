import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  //url:string = "http://127.0.0.1:3000"
  url:string = "https://minicorebackend-seqp.onrender.com"

  constructor(private http: HttpClient) { }

  calcularProgresos(data: any): Observable<any> {
    return this.http.post(this.url+'/api/v1/calcular_progresos', data);
  }

  getNotas(): Observable<any> {
    return this.http.get(this.url+'/api/v1/index');
  }
}
