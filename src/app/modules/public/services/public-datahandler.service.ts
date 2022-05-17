import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class PublicDatahandlerService {

  private url = environment.USR_PATH

  constructor(private _http: HttpClient) { }

  getUser(data:any): Observable<any>{
    return this._http.get<any>(this.url+data)
  }

  createUser(data: User[]): Observable<any>{
    return this._http.post<User[]>(this.url, data)
  }


}
