import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VueGlobal } from '../models/vueGlobal.model';

@Injectable({
  providedIn: 'root'
})
export class VueGlobalService {

  constructor(private http:HttpClient) { }

  getAllVueGlobal():Observable<VueGlobal[]>{
    let host=environment.host;
    return this.http.get<VueGlobal[]>(host+"/vueGlobal");
   }
}
