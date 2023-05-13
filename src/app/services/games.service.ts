import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl: string = 'https://localhost:44368/Games';

  constructor(private http: HttpClient) {
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${path}`).pipe(catchError(error => of(error)));
  }
  getLocal(path:string):Observable<any> {
    return this.http.get(`${path}`);
  }

}
