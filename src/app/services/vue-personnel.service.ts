 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VuePersonnel } from '../models/vuePersonnel.model';

@Injectable({
  providedIn: 'root'
})
export class VuePersonnelService {

  constructor(private http:HttpClient) {
    
   }
   getAllVuePersonnel():Observable<VuePersonnel[]>{
    let host=environment.host;
    return this.http.get<VuePersonnel[]>(host+"/vuePersonnel");
   }
}
