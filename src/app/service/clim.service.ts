import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimService {

  urlApi = "http://0.tcp.sa.ngrok.io:16745/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public getConected(): Observable<any>{
    return this.httpClient.get<any>(this.urlApi + 'conectar')
  }

  public toConect(): Observable<any>{
    return this.httpClient.post<any>(this.urlApi + 'ligar', 'EU ESTOU NEVOSO', this.httpOptions)
  }

  public toSwitchOff(): Observable<any>{
    return this.httpClient.get<any>(this.urlApi + 'desligar')
  }
}
