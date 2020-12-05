import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getIoProb(textToSearch: string): Observable<any>{
    const url = 'http://io-scouter-api.herokuapp.com/api?text=' + textToSearch;
    return this.http.get(url);
  }
}
