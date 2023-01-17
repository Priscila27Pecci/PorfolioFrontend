import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('jeson');
    console.log("El servicio porfolio esta corriendo");
  }
}
