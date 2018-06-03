import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EntradasService {

  constructor(private http: Http) { }
  public Fecha:any;
  public Hora="";

  getreportes_fsm4(data){
    return this.http.post('/api/v1/getreportes_fsm4', data).map(res => res.json());
  };
  
  getreportes_fsm1(data){
    return this.http.post('/api/v1/getreportes_fsm1',data).map(res => res.json());
  };


  getEntrada(entrada : number){
    return this.http.get(`/api/v1/getEntrada/${entrada}`).map(res => res.json());
 };


}
