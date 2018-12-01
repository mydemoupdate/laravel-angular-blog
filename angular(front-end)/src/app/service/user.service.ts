import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.apiUrl + '/api/user-all';
  private urldemo = environment.apiUrl + '/api/access-data';
  constructor(private httpClientService: HttpClient) { }

getUser (): Observable<any> {
  return this.httpClientService.get<any>(this.url);
}

showData(data: any): Observable<any>{
  return this.httpClientService.post<any>(this.urldemo,{name: data}, httpOptions);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
 console.log(message);
}
}
