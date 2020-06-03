import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  entregasURL = 'http://localhost:9050/entregas';

  constructor(private http: HttpClient){}

  listar(){
    return this.http.get<any[]>(`${this.entregasURL}`);
  }

}
