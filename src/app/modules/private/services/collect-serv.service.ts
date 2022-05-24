
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from '../interfaces/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectServService {

  private url = environment.COL_PATH

  constructor(private _http: HttpClient) { }

  public getAllCollections(): Observable<Collection[]>{
    return this._http.get<Collection[]>(this.url)
  }

  public updateCollection(id:any, data:any){
    return this._http.put(`${this.url}/${id}`, data)
  }

  public createCollection(data:Collection){
    this._http.post(this.url, data)
  }

}
