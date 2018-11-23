import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root',
})
export class UserService { 
    private URL_API =environment.API;
    url = {
        user: this.URL_API +'/user'
    }
  constructor(private httpClientService: HttpClient) { }
  getUser (): Observable<any> {
    return this.httpClientService.get(this.url.user);
  }
}