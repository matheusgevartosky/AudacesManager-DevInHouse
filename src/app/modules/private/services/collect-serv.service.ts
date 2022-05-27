import { Collection } from './../interfaces/collection';

import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CollectServService {

  private url = environment.COL_PATH

  constructor(private _http: HttpClient) { }

  public getAllCollections(): Observable<Collection[]>{
    return this._http.get<Collection[]>(this.url)
  }

  public updateCollection(data:any){
    return this._http.put(`${this.url}${data.id}`, data)
  }

  public createCollection(data:any): Observable<any>{
    return this._http.post(this.url, data)
  }

  public getByID(id: number){
    return this._http.get<Collection>(`${this.url}${id}`)
  }

  public deleteProduct(id: number): Observable<any>{
    return this._http.delete<Collection>(`${this.url}${id}`)
  }
}


