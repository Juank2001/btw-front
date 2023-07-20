import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url : string = environment.endpoint
  constructor(
    private http: HttpClient
  ) { }

  httpPost(path: string, data: object){
    let json = JSON.stringify(data)
    return this.http.post(this.url+path, json)
  }

  httpGet(path: string){
    return this.http.get(this.url+path)
  }
}
